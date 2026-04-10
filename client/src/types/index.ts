export interface EventInfo {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    image: string;
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
