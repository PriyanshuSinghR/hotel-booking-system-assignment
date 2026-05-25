type Props = {
  occupied: number;
  available: number;
};

export default function StatsCard({ occupied, available }: Props) {
  return (
    <div className="bg-white/[0.04] border border-white/10 backdrop-blur-2xl rounded-[36px] p-6 shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Statistics</h2>

          <p className="text-slate-400 text-sm mt-1">
            Live hotel occupancy data
          </p>
        </div>

        <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">
          Real-time
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-3xl bg-black/20 border border-white/5 p-5 flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm">Total Rooms</p>

            <h3 className="text-white text-2xl font-black mt-2">97</h3>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20" />
        </div>

        <div className="rounded-3xl bg-black/20 border border-white/5 p-5 flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm">Occupied</p>

            <h3 className="text-rose-400 text-2xl font-black mt-2">
              {occupied}
            </h3>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20" />
        </div>

        <div className="rounded-3xl bg-black/20 border border-white/5 p-5 flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm">Available</p>

            <h3 className="text-emerald-400 text-2xl font-black mt-2">
              {available}
            </h3>
          </div>

          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20" />
        </div>
      </div>
    </div>
  );
}
