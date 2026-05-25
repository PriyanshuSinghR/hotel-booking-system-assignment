import { Room } from "@/types/room";

type Props = {
  room: Room;
};

export default function RoomCard({ room }: Props) {
  const getStyles = () => {
    switch (room.status) {
      case "selected":
        return `
          bg-emerald-500
          border-emerald-400
          text-white
          shadow-lg shadow-emerald-500/25
          hover:shadow-emerald-500/40
        `;

      case "random":
      case "confirmed":
        return `
          bg-rose-500
          border-rose-400
          text-white
          shadow-lg shadow-rose-500/20
          hover:shadow-rose-500/30
        `;

      default:
        return `
          bg-white/[0.04]
          border-white/10
          text-white
          hover:bg-white/[0.08]
          hover:border-white/20
          hover:shadow-lg hover:shadow-white/5
        `;
    }
  };

  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        w-11 h-11
        sm:w-12 sm:h-12
        lg:w-14 lg:h-14
        rounded-xl
        border
        flex
        items-center
        justify-center
        font-bold
        text-[10px]
        sm:text-xs
        lg:text-sm
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
        ${getStyles()}
      `}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      </div>

      <span className="relative z-10">{room.roomNumber}</span>
    </div>
  );
}
