export interface EventInfo {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    image: string;
    status: "active" | "finished";
}

export interface User {
    image_profile: string;
    name: string;
    username: string;
}

export interface KPIData {
    id: string;
    title: string;
    value: number;
}

export interface ScanRecord {
    id: number;
    name: string;
    username: string;
    status: string;
    time: string;
}

export interface ScanPayload {
    qr_code: string;       // raw value from the QR scan
    event_id: number;      // which event was being scanned at
    scanned_at: string;    // ISO 8601 timestamp
}
