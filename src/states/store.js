import create from "zustand";

export const useStore = create((set) => ({
  isPopupOpen: false,
  setIsPopupOpen: (value) => set({ isPopupOpen: value }),

  popupMode: 1,
  setPopupMode: (value) => set({ popupMode: value }),
}));
