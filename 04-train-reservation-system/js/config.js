window.PROJECT_CONFIG = {
  "slug": "04-train-reservation-system",
  "name": "Online Train Reservation System",
  "entity": "Train reservations",
  "fields": [
    "passenger",
    "train",
    "from",
    "to",
    "journeyDate",
    "status"
  ],
  "seed": [
    {
      "passenger": "Suresh",
      "train": "Chennai Express",
      "from": "Chennai",
      "to": "Bengaluru",
      "journeyDate": "2026-11-08",
      "status": "Confirmed"
    },
    {
      "passenger": "Anitha",
      "train": "Charminar Express",
      "from": "Hyderabad",
      "to": "Chennai",
      "journeyDate": "2026-11-11",
      "status": "RAC"
    }
  ],
  "features": [
    "Search trains",
    "Check seat status",
    "Book / cancel tickets",
    "PNR and refund status"
  ]
};
