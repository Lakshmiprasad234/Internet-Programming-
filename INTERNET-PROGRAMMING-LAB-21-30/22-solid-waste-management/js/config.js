window.PROJECT_CONFIG = {
  "slug": "22-solid-waste-management",
  "name": "Solid Waste Management System",
  "entity": "Garbage bins",
  "fields": [
    "binId",
    "location",
    "wasteType",
    "capacity",
    "driver",
    "status"
  ],
  "seed": [
    {
      "binId": "BIN-101",
      "location": "Anna Nagar",
      "wasteType": "Wet",
      "capacity": "80%",
      "driver": "Ramesh",
      "status": "Collection pending"
    },
    {
      "binId": "BIN-102",
      "location": "Velachery",
      "wasteType": "Dry",
      "capacity": "45%",
      "driver": "Suresh",
      "status": "Scheduled"
    }
  ],
  "features": [
    "Admin manages garbage bins and drivers",
    "Public registers complaints",
    "Driver views daily work and routes",
    "Reports and collection status"
  ]
};
