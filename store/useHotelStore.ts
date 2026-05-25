import { create } from "zustand";
import { persist } from "zustand/middleware";

import { generateHotelRooms } from "@/lib/hotel";
import { Room } from "@/types/room";

type HotelStore = {
  rooms: Room[];

  setRooms: (rooms: Room[]) => void;

  clearAll: () => void;
};

export const useHotelStore = create<HotelStore>()(
  persist(
    (set) => ({
      rooms: generateHotelRooms(),

      setRooms: (rooms) => set({ rooms }),

      clearAll: () =>
        set({
          rooms: generateHotelRooms(),
        }),
    }),
    {
      name: "hotel-room-storage",
    }
  )
);
