import { CheckCircle2, WandSparkles } from "lucide-react";
import { Room } from "@/types/room";

type Props = {
  selectedRooms: Room[];
};

export default function BookingSummary({ selectedRooms }: Props) {
  return (
    <div className="bg-white/[0.04] border border-white/10 backdrop-blur-2xl rounded-[36px] p-6 shadow-2xl shadow-black/30 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full" />

      <div className="relative">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Booking Summary</h2>

          <p className="text-slate-400 text-sm mt-1">
            Current reservation details
          </p>
        </div>

        {selectedRooms.length > 0 ? (
          <div className="space-y-6">
            <div>
              <p className="text-slate-400 text-sm mb-3">Selected Rooms</p>

              <div className="flex flex-wrap gap-2">
                {selectedRooms.map((room) => (
                  <div
                    key={room.id}
                    className="
                      px-4 py-2 rounded-2xl
                      bg-emerald-500/15
                      border border-emerald-500/20
                      text-emerald-300
                      font-semibold
                      text-sm
                    "
                  >
                    {room.roomNumber}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/20 border border-white/5 rounded-3xl p-4">
                <p className="text-slate-400 text-sm">Rooms</p>

                <p className="text-3xl font-black text-white mt-2">
                  {selectedRooms.length}
                </p>
              </div>

              <div className="bg-black/20 border border-white/5 rounded-3xl p-4">
                <p className="text-slate-400 text-sm">Allocation</p>

                <p className="text-sm font-semibold text-white mt-3">
                  Optimized
                </p>
              </div>
            </div>

            <div className="rounded-3xl p-4 bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-400 mt-0.5" size={18} />

                <div>
                  <p className="text-emerald-300 font-semibold text-sm">
                    Reservation Ready
                  </p>

                  <p className="text-emerald-200/70 text-sm mt-1">
                    Submit booking to permanently lock selected rooms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-14 text-center">
            <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5">
              <WandSparkles className="text-slate-500" size={28} />
            </div>

            <h3 className="text-white font-semibold text-lg">
              No Active Selection
            </h3>

            <p className="text-slate-400 text-sm mt-2 max-w-xs mx-auto leading-relaxed">
              Generate occupancy or start a new booking to see reservation
              details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
