import { create } from "zustand";

interface IFlipCard {
  flipCard: boolean;
  setFlipCard: (flipCard: boolean) => void;
}

export const useFlipCard = create<IFlipCard>()((set) => ({
  flipCard: false,
  setFlipCard: (flip: boolean) => set({ flipCard: flip }),
}));