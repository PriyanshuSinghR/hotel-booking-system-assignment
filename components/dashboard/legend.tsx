export default function Legend() {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <div className="flex items-center gap-2 text-white text-sm">
        <div className="w-4 h-4 rounded bg-white/10 border border-white/10" />
        Available
      </div>

      <div className="flex items-center gap-2 text-white text-sm">
        <div className="w-4 h-4 rounded bg-rose-500" />
        Occupied
      </div>

      <div className="flex items-center gap-2 text-white text-sm">
        <div className="w-4 h-4 rounded bg-emerald-500" />
        Selected
      </div>
    </div>
  );
}
