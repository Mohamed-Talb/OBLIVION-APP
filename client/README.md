# Oblivion App - Frontend Documentation

This documentation provides the essential technical details for the development team working on the **Oblivion** Robotics Club Management Platform client application. 

## 🛠 Tech Stack

*   **Framework:** React 19
*   **Build Tool:** Vite
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4
*   **Routing:** React Router DOM
*   **QR Code Scanning:** HTML5-QRCode, qrcode.react

## 📂 Project Structure

```text
src/
├── assets/         # Static assets (images, fonts, etc.)
├── components/     # Reusable UI components (buttons, cards, forms)
├── Mock_data/      # Temporary development mock data 
├── pages/          # Application views organized by user role (admin, user)
│   ├── admin/      # Admin portal pages
│   └── user/       # Member portal pages
├── types/          # TypeScript interfaces and data models
├── App.tsx         # Main application component & Router definition
├── index.css       # Global styles & Tailwind configuration
└── main.tsx        # React entry point
```

## 🗺️ Routing Configuration

The application currently exposes the following routes for the Admin Portal (`src/App.tsx`):

*   `/admin` - Admin Dashboard / Home
*   `/admin/scan` - QR Scanner Page
*   `/admin/events` - Events Management
*   `/admin/addEvent` - Create New Event
*   `/admin/profile` - Admin Profile
*   `/admin/login` - Admin Authentication

*(Note: User portal routes are currently planned and disabled in `App.tsx`)*

## 🗂 Data Schemas

All core data structures are defined in `src/types/index.ts`. 

### `EventInfo`
Represents an event managed by the club.
```typescript
export interface EventInfo {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    image: string;
    status: "active" | "finished";
}
```

### `User`
Represents a user profile (Admin or Member).
```typescript
export interface User {
    image_profile: string;
    name: string;
    username: string;
}
```

### `ScanRecord`
Represents a recorded scan action by an attendee.
```typescript
export interface ScanRecord {
    id: number;
    name: string;
    username: string;
    status: string; // e.g., "valid", "invalid"
    time: string;   // e.g., "Just now", "2m ago"
}
```

### `ScanPayload`
The data payload generated upon a successful QR scan.
```typescript
export interface ScanPayload {
    qr_code: string;       // raw value from the QR scan
    event_id: number;      // which event was being scanned at
    scanned_at: string;    // ISO 8601 timestamp
}
```

### `KPIData`
Used for dashboard metrics.
```typescript
export interface KPIData {
    id: string;
    title: string;
    value: number;
}
```

## 🧪 Mock Data Usage

During development (prior to full API integration), mock data is supplied via `src/Mock_data/`. 

*   **Events (`events.ts`)**: Array of `EventInfo` objects detailing active and finished events.
*   **Scans (`scans.ts`)**: Array of recent `ScanRecord` objects for the scanner view.
*   **Admin (`admin.ts`)**: Initial `User` state for the admin profile.

*Ensure all components correctly use the TypeScript interfaces when consuming mock data.*

## 🚀 Development Workflow

*   **Install Dependencies:** `npm install`
*   **Run Development Server:** `npm run dev` (starts on `http://localhost:5173` and exposes to local network via `--host`)
*   **Build for Production:** `npm run build`
*   **Run Linter:** `npm run lint`

## 🎨 Design Principles
*   **Humanized UI:** Avoid generic, third-party UI icons (e.g., `lucide-react`). Rely on text, emojis, or custom handcrafted elements.
*   **Handcrafted Feel:** Use high-quality visual aesthetics, avoiding simple out-of-the-box AI templates.
