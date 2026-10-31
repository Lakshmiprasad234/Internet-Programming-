# MedCare Hospital Appointment System

Internet Programming Lab experiment prototype.

## Files
- `index.html` — user-facing home page and sample record listing.
- `pages/login.html` — simulated login page.
- `pages/admin.html` — admin panel to add, search, and delete records.
- `css/style.css` — responsive styling.
- `js/config.js` — experiment-specific fields and sample data.
- `js/app.js` — shared interface and localStorage functionality.
- `package.json`, `serve.js` — optional local Node.js server.

## Run
1. Open `index.html` directly in a browser, **or** open a terminal in this folder.
2. Run `npm start` (requires Node.js).
3. Visit `http://localhost:3000`.
4. Open **Admin** to add or delete sample records. Data is saved in browser localStorage.

## Note
This is a front-end demonstration for lab output. Authentication is simulated; payment gateways, OTP, email/SMS, maps, and real databases are not connected.
