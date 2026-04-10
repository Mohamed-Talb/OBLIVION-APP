import { CheckCircle2, XCircle } from "lucide-react";
import type { ScanRecord } from "../types";

interface RecentScansProps {
    scans: ScanRecord[];
}

export const RecentScans = ({ scans }: RecentScansProps) => {
    return (
        <div className="flex flex-col gap-3 mt-4">
            <h4 className="text-white font-medium text-sm border-b border-white/5 pb-2">Recent Scans</h4>

            <div className="flex flex-col gap-3">
                {scans.map((scan) => (
                    <div key={scan.id} className="flex flex-row items-center justify-between p-3.5 bg-[#1C1F26] rounded-[5px] border border-white/5 shadow-sm">
                        <div className="flex flex-row items-center gap-3">
                            <div className={`p-2 rounded-full ${scan.status === 'valid' ? 'text-green-500' : 'text-red-500'}`}>
                                {scan.status === 'valid' ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white text-[13px] font-semibold">{scan.name}</span>
                                <span className="text-[#A0AEC0] text-[11px]">@{scan.username} • {scan.status === 'valid' ? 'Valid Admission' : 'Invalid QR'}</span>
                            </div>
                        </div>
                        <span className="text-[#A0AEC0] text-[11px] font-medium">{scan.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
