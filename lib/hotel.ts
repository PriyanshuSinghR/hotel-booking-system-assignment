import { Room } from "@/types/room";

export function generateHotelRooms(): Room[] {
  const rooms: Room[] = [];

  for (let floor = 1; floor <= 9; floor++) {
    for (let room = 1; room <= 10; room++) {
      const roomNumber = floor * 100 + room;

      rooms.push({
        id: roomNumber.toString(),
        floor,
        roomNumber,
        status: "available",
      });
    }
  }

  for (let room = 1; room <= 7; room++) {
    const roomNumber = 1000 + room;

    rooms.push({
      id: roomNumber.toString(),
      floor: 10,
      roomNumber,
      status: "available",
    });
  }

  return rooms;
}
