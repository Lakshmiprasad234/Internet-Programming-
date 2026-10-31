window.PROJECT_CONFIG = {
  "slug": "02-hotel-room-booking",
  "name": "Hotel Room Booking System",
  "entity": "Room bookings",
  "fields": [
    "guest",
    "roomType",
    "checkIn",
    "checkOut",
    "status"
  ],
  "seed": [
    {
      "guest": "Aarav Kumar",
      "roomType": "Deluxe",
      "checkIn": "2026-11-05",
      "checkOut": "2026-11-07",
      "status": "Confirmed"
    },
    {
      "guest": "Priya Sharma",
      "roomType": "Single",
      "checkIn": "2026-11-10",
      "checkOut": "2026-11-12",
      "status": "Pending"
    }
  ],
  "features": [
    "Search rooms",
    "Check availability",
    "Book / cancel rooms",
    "Manage room prices and bookings"
  ]
};
