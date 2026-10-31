window.PROJECT_CONFIG = {
  "slug": "08-hospital-appointment-booking",
  "name": "MedCare Hospital Appointment System",
  "entity": "Appointments",
  "fields": [
    "patient",
    "doctor",
    "specialty",
    "date",
    "time",
    "status"
  ],
  "seed": [
    {
      "patient": "Arjun",
      "doctor": "Dr. Rao",
      "specialty": "Cardiology",
      "date": "2026-11-03",
      "time": "10:30",
      "status": "Confirmed"
    },
    {
      "patient": "Lakshmi",
      "doctor": "Dr. Mehta",
      "specialty": "Dermatology",
      "date": "2026-11-04",
      "time": "12:00",
      "status": "Pending"
    }
  ],
  "features": [
    "Search doctors and hospitals",
    "Book / cancel appointments",
    "View appointment history",
    "Admin doctor and appointment management"
  ]
};
