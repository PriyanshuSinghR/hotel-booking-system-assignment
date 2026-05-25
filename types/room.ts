export type RoomStatus = "available" | "random" | "selected" | "confirmed";

export type Room = {
  id: string;
  floor: number;
  roomNumber: number;
  status: RoomStatus;
};
