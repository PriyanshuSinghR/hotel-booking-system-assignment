# Hotel Reservation System

A modern and intelligent hotel room reservation system built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Zustand**.

This application automatically allocates rooms based on optimized travel distance logic while providing a premium real-time visualization dashboard.

---

# Features

- Smart room allocation algorithm
- Same-floor booking prioritization
- Optimized travel distance calculation
- Real-time hotel visualization
- Random occupancy simulation
- Temporary vs confirmed booking states
- Persistent room state using Zustand
- Fully responsive modern dashboard UI
- Glassmorphism design system
- Real-time room statistics
- Booking summary panel

---

# Tech Stack

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Zustand
- Lucide React Icons

---

# Room Structure

The hotel contains a total of **97 rooms** distributed across **10 floors**.

## Floors 1-9

- 10 rooms per floor
- Example:
  - Floor 1 → 101-110
  - Floor 2 → 201-210

## Floor 10

- 7 rooms only
- Rooms:
  - 1001-1007

---

# Booking Logic

The system follows these booking priorities:

## 1. Same Floor Priority

The algorithm first attempts to allocate all requested rooms on the same floor.

## 2. Contiguous Room Preference

Rooms that are adjacent to each other are prioritized.

## 3. Minimum Travel Time

If same-floor rooms are unavailable, the system selects rooms that minimize:

- Horizontal travel distance
- Vertical floor travel distance

---

# Travel Time Rules

## Horizontal Travel

- Moving between adjacent rooms costs:
  - 1 minute per room

Example:

- 101 → 102 = 1 minute
- 101 → 105 = 4 minutes

## Vertical Travel

- Moving between floors costs:
  - 2 minutes per floor

Example:

- Floor 1 → Floor 3 = 4 minutes

---

# Room Status System

The application uses multiple room states:

| Status    | Description                          |
| --------- | ------------------------------------ |
| Available | Empty room                           |
| Occupied  | Simulated or confirmed occupied room |
| Selected  | Current booking preview              |

---

# Application Workflow

## Random

Generates temporary hotel occupancy simulation.

## Book

Finds and highlights the best available rooms.

## Submit

Confirms selected rooms permanently.

## Reset

Clears temporary occupancy and current selections.

## Clear

Resets the entire hotel to initial state.

---

# Smart Allocation Algorithm

The booking engine:

- Generates all valid room combinations
- Calculates travel scores
- Prioritizes contiguous rooms
- Minimizes travel distance
- Optimizes same-floor allocation

The algorithm uses:

- Combination generation
- Distance scoring
- Contiguous room detection
- Priority-based optimization

---

# Responsive Design

The UI is fully responsive and optimized for:

- Mobile devices
- Tablets
- Laptops
- Large desktop screens

---

# Getting Started

## 1. Clone Repository

```bash
git clone <your-repository-url>
```

---

## 2. Move Into Project

```bash
cd hotel-booking-system
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Start Development Server

```bash
npm run dev
```

---

## 5. Open In Browser

```bash
http://localhost:3000
```

---

# Production Build

## Build Project

```bash
npm run build
```

## Start Production Server

```bash
npm start
```

---

# Deployment

The project can be easily deployed using:

- Vercel
- Netlify

Recommended platform:

https://vercel.com

---

# Project Structure

```bash
app/
components/
lib/
store/
types/
```

---

# Future Improvements

Potential future enhancements:

- Authentication system
- Booking history
- Admin dashboard
- Backend integration
- Database persistence
- Analytics dashboard
- Room filtering system

---

# Author

Priyanshu Singh

Full Stack Engineer
