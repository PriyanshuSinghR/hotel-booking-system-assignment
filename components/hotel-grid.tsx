import { Room } from "@/types/room";
import RoomCard from "./room-card";

type Props = {
  rooms: Room[];
};

export default function HotelGrid({ rooms }: Props) {
  const groupedRooms = Array.from({ length: 10 }, (_, i) => {
    const floor = 10 - i;

    return {
      floor,
      rooms: rooms.filter((room) => room.floor === floor),
    };
  });

  return (
    <div className="space-y-3">
      {groupedRooms.map((floorData) => (
        <div
          key={floorData.floor}
          className="
            group
            relative
            overflow-hidden
            rounded-[24px]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            px-4 py-3
            transition-all duration-300
            hover:border-white/15
            hover:bg-white/[0.05]
          "
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.03] via-transparent to-purple-500/[0.03]" />
          </div>

          <div className="relative flex items-center gap-4 lg:gap-5">
            <div className="w-16 sm:w-20 lg:w-24 shrink-0">
              <p className="text-slate-500 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em]">
                Floor
              </p>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white mt-1 leading-none">
                {floorData.floor}
              </h3>
            </div>

            <div className="hidden lg:block w-px self-stretch bg-white/10" />

            <div className="flex flex-wrap gap-2 max-w-[820px]">
              {floorData.rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
