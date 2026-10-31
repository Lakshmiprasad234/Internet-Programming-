window.PROJECT_CONFIG = {
  "slug": "05-flight-reservation-system",
  "name": "Online Flight Reservation System",
  "entity": "Flight bookings",
  "fields": [
    "passenger",
    "airline",
    "from",
    "to",
    "travelDate",
    "status"
  ],
  "seed": [
    {
      "passenger": "Kiran",
      "airline": "IndiGo",
      "from": "Chennai",
      "to": "Delhi",
      "travelDate": "2026-11-12",
      "status": "Confirmed"
    },
    {
      "passenger": "Divya",
      "airline": "Air India",
      "from": "Hyderabad",
      "to": "Mumbai",
      "travelDate": "2026-11-15",
      "status": "Pending"
    }
  ],
  "features": [
    "Search flights",
    "Choose class and seats",
    "Book / cancel tickets",
    "Print ticket and view status"
  ]
};
