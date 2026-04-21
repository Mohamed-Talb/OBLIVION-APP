import { useState } from "react";
import { Header } from "../../components/Header";
import { NavBarAdmin } from "../../components/NavBarAdmin";
import { EventSelector } from "../../components/EventSelector";
import { ScannerArea } from "../../components/ScannerArea";
import { RecentScans } from "../../components/RecentScans";
import { recentScans as initialScans } from "../../Mock_data/scans";
import type { ScanRecord } from "../../types";

export const ScanPage = () => {
    const [selectedEventId, setSelectedEventId] = useState<number | "">("");
    const [scans, setScans] = useState<ScanRecord[]>(initialScans);

    const handleScan = (result: string) => {
        const newScan: ScanRecord = {
            id: Date.now(),
            name: result,
            username: result.toLowerCase().replace(/\s+/g, ""),
            status: "valid",
            time: "Just now",
        };
        setScans((prev) => [newScan, ...prev]);
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen w-full pt-16 pb-24 px-4 focus:outline-none">
            <Header variant="page" title="Scan Attendees" />

            <div className="flex flex-col w-full max-w-[390px] mt-6 gap-6">
                {/* Event Selection */}
                <EventSelector
                    selectedEventId={selectedEventId}
                    setSelectedEventId={setSelectedEventId}
                />

                {/* Scanner Area */}
                <ScannerArea
                    selectedEventId={selectedEventId}
                    onScan={handleScan}
                />

                {/* Recent Scans */}
                <RecentScans scans={scans} />
            </div>

            <NavBarAdmin />
        </div>
    );
};
