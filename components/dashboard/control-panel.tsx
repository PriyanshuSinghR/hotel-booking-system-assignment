import { BedDouble } from "lucide-react";

type Props = {
  count: string;
  setCount: (value: string) => void;
  handleBooking: () => void;
  handleRandom: () => void;
  handleSubmit: () => void;
  handleReset: () => void;
  clearAll: () => void;
  hasSelection: boolean;
};

export default function ControlPanel({
  count,
  setCount,
  handleBooking,
  handleRandom,
  handleSubmit,
  handleReset,
  clearAll,
  hasSelection,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="relative">
        <BedDouble
          className="absolute left-4 top-3.5 text-slate-500"
          size={20}
        />

        <input
          type="number"
          min={1}
          max={5}
          value={count}
          onChange={(e) => setCount(e.target.value)}
          placeholder="Rooms"
          className="
            w-full sm:w-40
            h-12
            pl-12
            pr-4
            rounded-2xl
            bg-white/[0.04]
            border border-white/10
            backdrop-blur-2xl
            text-white
            placeholder:text-slate-500
            outline-none
            focus:border-blue-500/50
            transition-all
          "
        />
      </div>

      <button
        onClick={handleBooking}
        className="
          h-12 px-5 rounded-2xl
          bg-blue-500 hover:bg-blue-600
          text-white font-semibold
          transition-all duration-300
          hover:scale-105 active:scale-95
          shadow-lg shadow-blue-500/20
        "
      >
        Book
      </button>

      <button
        onClick={handleRandom}
        className="
          h-12 px-5 rounded-2xl
          bg-purple-500 hover:bg-purple-600
          text-white font-semibold
          transition-all duration-300
          hover:scale-105 active:scale-95
          shadow-lg shadow-purple-500/20
        "
      >
        Random
      </button>

      <button
        onClick={handleSubmit}
        disabled={!hasSelection}
        className={`
    h-12 px-5 rounded-2xl
    text-white font-semibold
    transition-all duration-300
    shadow-lg
    ${
      hasSelection
        ? "bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 shadow-emerald-500/20"
        : "bg-slate-700 cursor-not-allowed opacity-50"
    }
  `}
      >
        Submit
      </button>

      <button
        onClick={handleReset}
        className="
          h-12 px-5 rounded-2xl
          bg-rose-500 hover:bg-rose-600
          text-white font-semibold
          transition-all duration-300
          hover:scale-105 active:scale-95
          shadow-lg shadow-rose-500/20
        "
      >
        Reset
      </button>

      <button
        onClick={clearAll}
        className="
          h-12 px-5 rounded-2xl
          bg-white/5 hover:bg-white/10
          border border-white/10
          backdrop-blur-2xl
          text-white font-semibold
          transition-all duration-300
          hover:scale-105 active:scale-95
        "
      >
        Clear
      </button>
    </div>
  );
}
