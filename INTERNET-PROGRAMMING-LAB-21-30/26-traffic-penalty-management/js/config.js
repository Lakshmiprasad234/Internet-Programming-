window.PROJECT_CONFIG = {
  "slug": "26-traffic-penalty-management",
  "name": "Traffic Squad Penalty Management System",
  "entity": "Traffic cases",
  "fields": [
    "caseId",
    "vehicleNo",
    "owner",
    "violation",
    "fineAmount",
    "policeOfficer",
    "status"
  ],
  "seed": [
    {
      "caseId": "FIR-1001",
      "vehicleNo": "TN01AB1234",
      "owner": "Karthik",
      "violation": "Signal jumping",
      "fineAmount": "1000",
      "policeOfficer": "Officer Kumar",
      "status": "Issued"
    },
    {
      "caseId": "FIR-1002",
      "vehicleNo": "TN10CD5678",
      "owner": "Ravi",
      "violation": "No helmet",
      "fineAmount": "500",
      "policeOfficer": "Officer Priya",
      "status": "Paid"
    }
  ],
  "features": [
    "User views challan and filed cases",
    "Police creates case and uploads proof",
    "View traffic reports",
    "Admin manages police login and daily reports"
  ]
};
