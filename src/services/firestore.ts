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
  phone?: string;
  instagram?: string;
};

export type WeeklySchedule = {
  [weekday: string]: string[];
};

// 🔹 Criar barbearia
export async function createShop(
  ownerId: string,
  name: string,
  location: string,
  phone?: string,
  instagram?: string
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
    location: location.trim().toLowerCase(),
    slug,
    phone: phone || null,
    instagram: instagram || null,
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

// 🔹 Marcar agendamento como concluído
export async function doneBooking(shopId: string, bookingId: string) {
  const ref = doc(db, 'shops', shopId, 'bookings', bookingId);
  await updateDoc(ref, {
    status: 'done',
  });
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

// 🔹 Listar todas barbearias
export async function listAllShops() {
  const q = query(collection(db, 'shops'), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data() as Shop);
}

export type Booking = {
  archived: any;
  id: string;
  shopId: string;
  date: string;
  time: string;
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

// 🔹 Arquivar agendamento
export async function archiveBooking(shopId: string, bookingId: string) {
  const ref = doc(db, 'shops', shopId, 'bookings', bookingId);
  await updateDoc(ref, { archived: true });
}

// 🔹 Listar agendamentos
export async function listBookings(shopId: string) {
  const q = collection(db, 'shops', shopId, 'bookings');
  const snap = await getDocs(q);
  return snap.docs
    .map((d) => d.data() as Booking)
    .filter((b) => !b.archived);
}

// 🔹 Cancelar agendamento
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

// 🔹 Listar agendamentos do cliente
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
        !data.archived &&
        data.status !== 'done'
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

// 🔹 Buscar horários semanais
export async function getWeeklySchedule(shopId: string): Promise<WeeklySchedule> {
  const ref = doc(db, 'schedules', shopId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return {};
  return (snap.data().weekly || {}) as WeeklySchedule;
}

// 🔹 Excluir horário específico de um dia
export async function removeWeeklySlot(shopId: string, day: string, slot: string) {
  const ref = doc(db, 'schedules', shopId);
  const snap = await getDoc(ref);

  if (!snap.exists()) return;

  const weekly = (snap.data().weekly || {}) as WeeklySchedule;
  const updated = { ...weekly };

  if (updated[day]) {
    updated[day] = updated[day].filter((t) => t !== slot);
  }

  await updateDoc(ref, { weekly: updated });
  return updated;
}
