import { useState } from "react";
import { ScanLine, CheckCircle2 } from "lucide-react";
import { Scanner } from "@yudiel/react-qr-scanner";

interface ScannerAreaProps {
    selectedEventId: number | "";
}

export const ScannerArea = ({ selectedEventId }: ScannerAreaProps) => {
    const [scanResult, setScanResult] = useState<string | null>(null);

    const handleScan = (result: any) => {
        if (result && result.length > 0) {
            // Support for @yudiel/react-qr-scanner v2 array structure
            const value = typeof result === 'string' ? result : result[0].rawValue;
            setScanResult(value);
            console.log("Scanned QR:", value);
        }
    };

    return (
        <div className={`flex flex-col items-center justify-center w-full h-[320px] rounded-2xl border-2 border-dashed ${selectedEventId ? 'border-blue-500/50 bg-[#1C1F26] overflow-hidden' : 'border-white/10 bg-[#1C1F26]/40 gap-4'} relative transition-colors`}>
            
            {!selectedEventId ? (
                <>
                    <ScanLine size={48} className="text-zinc-600" />
                    <p className="text-white font-medium tracking-wide text-sm">
                        Please select an event first
                    </p>
                </>
            ) : scanResult ? (
                <div className="flex flex-col items-center gap-3 p-4">
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-2">
                        <CheckCircle2 size={32} />
                    </div>
                    <p className="text-white font-medium text-[16px]">Scanned Successfully!</p>
                    <p className="text-xs text-[#A0AEC0] max-w-[250px] truncate text-center mb-2">{scanResult}</p>
                    <button 
                        onClick={() => setScanResult(null)}
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-colors mt-2"
                    >
                        Scan Another QR
                    </button>
                </div>
            ) : (
                <div className="w-full h-full relative">
                    <Scanner
                        onScan={(result) => handleScan(result)}
                        styles={{
                            container: { width: '100%', height: '100%', paddingTop: "0" }
                        }}
                    />
                    <div className="absolute inset-x-0 bottom-6 flex justify-center pointer-events-none">
                        <p className="bg-black/70 px-4 py-2 rounded-full text-white text-[11px] font-semibold tracking-wider">
                            Position QR code within frame
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
