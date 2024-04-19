import { create } from "zustand"


export const useStore2 = create((set) => ({
    count2: 1,
    inc: () => set((state) => ({ count2: state.count - 1 })),
  }))