import { Room } from "@/types/room";

function roomPosition(room: Room) {
  return room.roomNumber % 100;
}

function calculateTravelTime(rooms: Room[]) {
  if (rooms.length <= 1) return 0;

  let minFloor = Infinity;
  let maxFloor = -Infinity;

  let minPos = Infinity;
  let maxPos = -Infinity;

  for (const room of rooms) {
    minFloor = Math.min(minFloor, room.floor);
    maxFloor = Math.max(maxFloor, room.floor);

    minPos = Math.min(minPos, roomPosition(room));
    maxPos = Math.max(maxPos, roomPosition(room));
  }

  const vertical = (maxFloor - minFloor) * 2;
  const horizontal = maxPos - minPos;

  return vertical + horizontal;
}

function isContiguous(rooms: Room[]) {
  const sorted = [...rooms].sort((a, b) => a.roomNumber - b.roomNumber);

  for (let i = 1; i < sorted.length; i++) {
    if (roomPosition(sorted[i]) !== roomPosition(sorted[i - 1]) + 1) {
      return false;
    }
  }

  return true;
}

function combinations<T>(arr: T[], size: number): T[][] {
  const result: T[][] = [];

  function helper(start: number, current: T[]) {
    if (current.length === size) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      helper(i + 1, current);
      current.pop();
    }
  }

  helper(0, []);

  return result;
}

export function findBestRooms(rooms: Room[], requiredRooms: number): Room[] {
  const availableRooms = rooms.filter((room) => room.status === "available");

  if (availableRooms.length < requiredRooms) {
    return [];
  }

  let bestRooms: Room[] = [];
  let bestScore = Infinity;

  for (let floor = 1; floor <= 10; floor++) {
    const floorRooms = availableRooms
      .filter((room) => room.floor === floor)
      .sort((a, b) => a.roomNumber - b.roomNumber);

    if (floorRooms.length < requiredRooms) {
      continue;
    }

    const combos = combinations(floorRooms, requiredRooms);

    for (const combo of combos) {
      let score = calculateTravelTime(combo);

      if (isContiguous(combo)) {
        score -= 100;
      }

      if (score < bestScore) {
        bestScore = score;
        bestRooms = combo;
      }
    }
  }

  if (bestRooms.length === 0) {
    const combos = combinations(availableRooms, requiredRooms);

    for (const combo of combos) {
      const score = calculateTravelTime(combo);

      if (score < bestScore) {
        bestScore = score;
        bestRooms = combo;
      }
    }
  }

  return bestRooms;
}
