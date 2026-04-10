import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Html5QrcodeScanner } from "html5-qrcode";

interface ScannerAreaProps {
    selectedEventId: number | "";
}

export const ScannerArea = ({ selectedEventId }: ScannerAreaProps) => {
    const [scanResult, setScanResult] = useState<string | null>(null);

    useEffect(() => {
        if (!selectedEventId || scanResult) return;

        const scanner = new Html5QrcodeScanner("reader", {
            qrbox: { width: 250, height: 250 },
            fps: 10,
        }, false);

        function onScanSuccess(decodedText: string, decodedResult: any) {
            scanner.clear();
            setScanResult(decodedText);
        }

        function onScanFailure(error: string) {
            console.log(error);
        }

        scanner.render(onScanSuccess, onScanFailure);

        return () => {
            scanner.clear().catch(() => { });
        };
    }, [selectedEventId, scanResult]);


    return (
        <div
            className={`flex flex-col items-center justify-center w-full min-h-[350px] rounded-2xl border-2 border-dashed relative transition-colors ${selectedEventId
                ? "border-blue-500/50 bg-[#1C1F26] overflow-hidden"
                : "border-white/10 bg-[#1C1F26]/40 p-4"
                }`}
        >
            {!selectedEventId ? (
                <div className="flex flex-col items-center gap-4 text-center">
                    <p className="text-white font-medium tracking-wide text-[15px]">
                        Please select an event first
                    </p>
                    <p className="text-xs text-[#A0AEC0]">
                        Scanner will activate upon selection.
                    </p>
                </div>
            ) : scanResult ? (
                <div className="flex flex-col items-center gap-3 p-4 w-full h-full justify-center bg-[#1C1F26] z-10">
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-2">
                        <CheckCircle2 size={32} />
                    </div>

                    <p className="text-white font-medium text-[16px]">
                        Scanned Successfully!
                    </p>

                    <p className="text-xs text-[#A0AEC0] max-w-[250px] truncate text-center mb-2">
                        {scanResult}
                    </p>

                    <button
                        onClick={() => setScanResult(null)}
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-colors mt-2"
                    >
                        Scan Another QR
                    </button>
                </div>
            ) : (
                <div className="w-full h-[320px] bg-white rounded-lg overflow-hidden">
                    <div id="reader" className="w-full h-full" />
                </div>
            )}
        </div>
    );
};
