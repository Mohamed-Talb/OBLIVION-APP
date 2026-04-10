import { useState } from "react";
import { Header } from "../../components/Header";
import { NavBarAdmin } from "../../components/NavBarAdmin";
import { EventSelector } from "../../components/EventSelector";
import { ScannerArea } from "../../components/ScannerArea";
import { RecentScans } from "../../components/RecentScans";
import { recentScans } from "../../Mock_data/scans";

export const ScanPage = () => {
    const [selectedEventId, setSelectedEventId] = useState<number | "">("");

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
                <ScannerArea selectedEventId={selectedEventId} />

                {/* Recent Scans */}
                <RecentScans scans={recentScans} />

            </div>

            <NavBarAdmin />
        </div>
    );
};
