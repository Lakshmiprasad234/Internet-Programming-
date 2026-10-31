window.PROJECT_CONFIG = {
  "slug": "15-online-toll-payment",
  "name": "EasyToll Online Toll Payment",
  "entity": "Toll passes",
  "fields": [
    "vehicleNo",
    "owner",
    "passType",
    "validTill",
    "balance",
    "status"
  ],
  "seed": [
    {
      "vehicleNo": "TN01AB1234",
      "owner": "Karthik",
      "passType": "Monthly",
      "validTill": "2026-11-30",
      "balance": "500",
      "status": "Active"
    },
    {
      "vehicleNo": "AP09CD5678",
      "owner": "Harsha",
      "passType": "Single Trip",
      "validTill": "2026-11-02",
      "balance": "120",
      "status": "Pending"
    }
  ],
  "features": [
    "Manage wallet and toll payments",
    "Apply / renew toll pass",
    "Generate QR pass",
    "Verify pass at toll gate"
  ]
};
