window.PROJECT_CONFIG = {
  "slug": "27-online-bus-pass-system",
  "name": "Online Bus Pass System",
  "entity": "Bus passes",
  "fields": [
    "passId",
    "candidateName",
    "passType",
    "schoolOrCompany",
    "route",
    "validTill",
    "status"
  ],
  "seed": [
    {
      "passId": "BP-2026-101",
      "candidateName": "Anil Kumar",
      "passType": "Student",
      "schoolOrCompany": "Government High School",
      "route": "Tambaram - Chennai",
      "validTill": "2026-11-30",
      "status": "Approved"
    },
    {
      "passId": "BP-2026-102",
      "candidateName": "Divya",
      "passType": "Route",
      "schoolOrCompany": "ABC Technologies",
      "route": "Avadi - Chennai",
      "validTill": "2026-11-30",
      "status": "Pending"
    }
  ],
  "features": [
    "Apply and renew student/route pass",
    "Wallet and e-ticket demo",
    "Admin approves passes and creates QR details",
    "Conductor verifies pass and ticket"
  ]
};
