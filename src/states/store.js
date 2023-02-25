import create from "zustand";

export const useStore = create((set) => ({
  isPopupOpen: false,
  setIsPopupOpen: (value) => set(() => ({ isPopupOpen: value })),
}));
