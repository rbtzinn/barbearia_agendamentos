import {
  collection,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
  runTransaction,
  orderBy,
  updateDoc,
  collectionGroup,
} from 'firebase/firestore';
import { auth, db } from './firebase';
import { nanoid } from 'nanoid';

export type Shop = {
  id: string;
  ownerId: string;
  name: string;
  location: string;
  slug: string;
  createdAt: any;
};

export type WeeklySchedule = {
  [weekday: string]: string[];
};

// 🔹 Criar barbearia
export async function createShop(
  ownerId: string,
  name: string,
  location: string,
) {
  const slugBase = name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const slug = slugBase + '-' + nanoid(6).toLowerCase();
  const id = nanoid(12);
  const ref = doc(db, 'shops', id);

  await setDoc(ref, {
    id,
    ownerId,
    name,
    location: location.trim().toLowerCase(), // 👈 sempre salvar lowercase
    slug,
    createdAt: serverTimestamp(),
  });

  return { id, slug };
}

// 🔹 Definir horários semanais
export async function setWeeklySchedule(
  shopId: string,
  weekly: WeeklySchedule,
) {
  const ref = doc(db, 'schedules', shopId);
  await setDoc(ref, { shopId, weekly }, { merge: true });
}

// 🔹 Buscar barbearia por dono
export async function getShopByOwner(ownerId: string) {
  const q = query(collection(db, 'shops'), where('ownerId', '==', ownerId));
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data() as Shop);
}

// 🔹 Buscar barbearia pelo slug
export async function getShopBySlug(slug: string) {
  const q = query(collection(db, 'shops'), where('slug', '==', slug));
  const snap = await getDocs(q);
  return snap.docs[0]?.data() as Shop | undefined;
}

// 🔹 Listar barbearias por localização
export async function listShopsByLocation(term: string) {
  const normalized = term.trim().toLowerCase();
  const q = query(
    collection(db, 'shops'),
    where('location', '>=', normalized),
    where('location', '<=', normalized + '\uf8ff'),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data() as Shop);
}

// 🔹 Listar todas barbearias (admin/debug)
export async function listAllShops() {
  const q = query(collection(db, 'shops'), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data() as Shop);
}

export type Booking = {
  archived: any;
  id: string;
  shopId: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  clientName: string;
  clientEmail: string;
  phone: string;
  createdAt: any;
  status?: string;
  cancelReason?: string;
  cancelledBy?: 'client' | 'barber';
  cancelledAt?: any;
};

// 🔹 Reservar horário
export async function bookSlot(
  shopId: string,
  date: string,
  time: string,
  clientName: string,
  phone: string,
) {
  const bookingId = `${date}_${time}`;
  const bookingRef = doc(db, 'shops', shopId, 'bookings', bookingId);

  await runTransaction(db, async (trx) => {
    const snap = await trx.get(bookingRef);
    if (snap.exists() && snap.data()?.status !== 'cancelled') {
      throw new Error('Esse horário já foi reservado.');
    }
    trx.set(bookingRef, {
      id: bookingId,
      shopId,
      date,
      time,
      clientName,
      phone,
      clientEmail: auth.currentUser?.email || null,
      createdAt: serverTimestamp(),
      status: 'confirmed',
    });
  });

  return bookingId;
}

export async function archiveBooking(shopId: string, bookingId: string) {
  const ref = doc(db, 'shops', shopId, 'bookings', bookingId);
  await updateDoc(ref, {
    archived: true,
  });
}


// 🔹 Listar reservas
export async function listBookings(shopId: string) {
  const q = collection(db, 'shops', shopId, 'bookings');
  const snap = await getDocs(q);
  return snap.docs
    .map((d) => d.data() as Booking)
    .filter((b) => !b.archived);
}
// 🔹 Cancelar reserva
export async function cancelBooking(
  shopId: string,
  bookingId: string,
  reason: string,
  cancelledBy: 'client' | 'barber',
) {
  const ref = doc(db, 'shops', shopId, 'bookings', bookingId);
  await updateDoc(ref, {
    status: 'cancelled',
    cancelReason: reason,
    cancelledBy,
    cancelledAt: serverTimestamp(),
  });
}

export async function listClientBookings(identifier: string) {
  const bookings: (Booking & { shopName: string })[] = [];

  const shopsSnap = await getDocs(collection(db, 'shops'));
  for (const shop of shopsSnap.docs) {
    const bookingsSnap = await getDocs(
      collection(db, 'shops', shop.id, 'bookings'),
    );

    bookingsSnap.forEach((d) => {
      const data = d.data() as Booking;

      if (
        (data.clientName === identifier ||
          data.phone === identifier ||
          data.clientEmail === identifier) &&
        !data.archived
      ) {
        bookings.push({
          ...data,
          phone: data.phone || '',
          shopName: shop.data().name,
        });
      }
    });
  }
  return bookings;
}


