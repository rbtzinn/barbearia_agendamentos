import { create } from 'zustand';

type Client = {
  name: string;
  phone: string;
};

type State = {
  client: Client | null;
  setClient: (c: Client) => void;
  clear: () => void;
};

export const useClientStore = create<State>((set) => ({
  client: JSON.parse(localStorage.getItem('client') || 'null'),
  setClient: (c) => {
    localStorage.setItem('client', JSON.stringify(c));
    set({ client: c });
  },
  clear: () => {
    localStorage.removeItem('client');
    set({ client: null });
  },
}));
