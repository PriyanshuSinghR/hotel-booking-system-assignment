"use client";

import { useMemo, useState } from "react";

import HotelGrid from "@/components/hotel-grid";

import { findBestRooms } from "@/lib/booking";

import { Building2 } from "lucide-react";

import { useHotelStore } from "@/store/useHotelStore";

import BookingSummary from "@/components/dashboard/booking-summary";
import ControlPanel from "@/components/dashboard/control-panel";
import StatsCard from "@/components/dashboard/stats-card";
import Legend from "@/components/dashboard/legend";

export default function Home() {
  const { rooms, setRooms, clearAll } = useHotelStore();

  const [count, setCount] = useState("");

  const selectedRooms = useMemo(
    () => rooms.filter((room) => room.status === "selected"),
    [rooms]
  );

  const occupiedRooms = useMemo(
    () =>
      rooms.filter(
        (room) => room.status === "random" || room.status === "confirmed"
      ),
    [rooms]
  );

  const availableRooms = useMemo(
    () => rooms.filter((room) => room.status === "available"),
    [rooms]
  );

  function handleBooking() {
    const requiredRooms = Number(count);

    if (requiredRooms < 1 || requiredRooms > 5) {
      alert("You can only book 1 to 5 rooms");
      return;
    }

    const cleanedRooms = rooms.map((room) => {
      if (room.status === "selected") {
        return {
          ...room,
          status: "available" as const,
        };
      }

      return room;
    });

    const bestRooms = findBestRooms(cleanedRooms, requiredRooms);

    if (bestRooms.length === 0) {
      alert("Rooms not available");
      return;
    }

    const updatedRooms = cleanedRooms.map((room) => {
      const found = bestRooms.find((r) => r.id === room.id);

      if (found) {
        return {
          ...room,
          status: "selected" as const,
        };
      }

      return room;
    });

    setRooms(updatedRooms);
  }

  function handleReset() {
    const updatedRooms = rooms.map((room) => {
      if (room.status === "random" || room.status === "selected") {
        return {
          ...room,
          status: "available" as const,
        };
      }

      return room;
    });

    setRooms(updatedRooms);
  }

  function handleRandom() {
    const clearedRooms = rooms.map((room) => {
      if (room.status === "random" || room.status === "selected") {
        return {
          ...room,
          status: "available" as const,
        };
      }

      return room;
    });

    const availableRooms = clearedRooms.filter(
      (room) => room.status === "available"
    );

    const updatedRooms = [...clearedRooms];

    const groups = Math.floor(Math.random() * 6) + 6;

    for (let i = 0; i < groups; i++) {
      const floor = Math.floor(Math.random() * 10) + 1;

      const floorRooms = availableRooms
        .filter((room) => room.floor === floor)
        .sort((a, b) => a.roomNumber - b.roomNumber);

      if (!floorRooms.length) continue;

      const size = Math.floor(Math.random() * 4) + 1;

      if (floorRooms.length < size) continue;

      const start = Math.floor(Math.random() * (floorRooms.length - size + 1));

      const selection = floorRooms.slice(start, start + size);

      selection.forEach((room) => {
        const target = updatedRooms.find((r) => r.id === room.id);

        if (target && target.status !== "confirmed") {
          target.status = "random";
        }
      });
    }

    setRooms(updatedRooms);
  }

  function handleSubmit() {
    const updatedRooms = rooms.map((room) => {
      if (room.status === "random" || room.status === "selected") {
        return {
          ...room,
          status: "confirmed" as const,
        };
      }

      return room;
    });

    setRooms(updatedRooms);
    setCount("");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] p-4 sm:p-6 lg:p-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-500/20 blur-3xl rounded-full" />

        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full" />

        <div className="absolute top-[40%] left-[40%] w-[250px] h-[250px] bg-emerald-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto">
        <div className="flex flex-col 2xl:flex-row 2xl:items-center 2xl:justify-between gap-6 mb-8 lg:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full" />

              <div className="relative p-5 rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-2xl">
                <Building2 className="text-blue-400" size={42} />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  Hotel Reservation
                </h1>

                <div className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
                  Live System
                </div>
              </div>

              <p className="text-slate-400 mt-3 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                Intelligent room allocation engine with optimized travel
                distance calculation and real-time occupancy visualization.
              </p>
            </div>
          </div>

          <ControlPanel
            count={count}
            setCount={setCount}
            handleBooking={handleBooking}
            handleRandom={handleRandom}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
            clearAll={clearAll}
          />
        </div>

        <div className="grid grid-cols-1 2xl:grid-cols-[900px_380px] gap-6 lg:gap-8 justify-center">
          <div className="bg-white/[0.04] border border-white/10 backdrop-blur-2xl rounded-[36px] p-4 sm:p-6 shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Hotel Floors
                </h2>
              </div>

              <Legend />
            </div>

            <HotelGrid rooms={rooms} />
          </div>

          <div className="space-y-6 2xl:sticky 2xl:top-8 h-fit">
            <BookingSummary selectedRooms={selectedRooms} />

            <StatsCard
              occupied={occupiedRooms.length}
              available={availableRooms.length}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
