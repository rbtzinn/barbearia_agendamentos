import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as fbSignOut,
  sendEmailVerification,
  updateProfile,
  type User,
} from 'firebase/auth';
import { auth, db } from '@/services/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { create } from 'zustand';

type Role = 'client' | 'barber';

type State = {
  user: User | null;
  role: Role | null;
  name: string | null;
  ready: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    extra: { name: string; role: Role },
  ) => Promise<void>;
  signOut: () => Promise<void>;
};

export const useAuthStore = create<State>((set) => ({
  user: null,
  role: null,
  name: null,
  ready: false,

  async login(email, password) {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    if (!cred.user.emailVerified) {
      await fbSignOut(auth);
      throw new Error('Confirme seu e-mail antes de entrar.');
    }
  },

  async register(email, password, extra) {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    if (cred.user) {
      await updateProfile(cred.user, { displayName: extra.name });
      await setDoc(doc(db, 'users', cred.user.uid), {
        name: extra.name,
        email,
        role: extra.role,
      });
      await sendEmailVerification(cred.user);

      // desloga até confirmar
      await fbSignOut(auth);
      throw new Error('Conta criada! Verifique seu e-mail antes de entrar.');
    }
  },

  async signOut() {
    await fbSignOut(auth);
    set({ role: null, name: null });
  },
}));

onAuthStateChanged(auth, async (u) => {
  if (u && u.emailVerified) {
    const ref = doc(db, 'users', u.uid);
    const snap = await getDoc(ref);
    const data = snap.exists() ? snap.data() : {};

    useAuthStore.setState({
      user: u,
      name: (u.displayName as string) || (data.name as string) || null,
      role: (data.role as Role) || null,
      ready: true,
    });
  } else {
    useAuthStore.setState({
      user: null,
      role: null,
      name: null,
      ready: true,
    });
  }
});
