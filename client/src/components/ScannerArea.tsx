import { useState, useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { Html5Qrcode } from "html5-qrcode";

interface ScannerAreaProps {
    selectedEventId: number | "";
    onScan?: (result: string) => void;
}

export const ScannerArea = ({ selectedEventId, onScan }: ScannerAreaProps) => {
    const [scanResult, setScanResult] = useState<string | null>(null);
    const qrRef = useRef<Html5Qrcode | null>(null);
    const stoppedRef = useRef(false);

    const startScanner = async () => {
        if (!selectedEventId) return;

        // Fully stop and clear previous instance before restarting
        if (qrRef.current) {
            try {
                await qrRef.current.stop();
                qrRef.current.clear(); // sync — returns void, no .catch() needed
            } catch (_) { /* already stopped, safe to ignore */ }
            qrRef.current = null;
        }

        // Wipe the div's innerHTML as a safety net
        const readerEl = document.getElementById("reader");
        if (readerEl) readerEl.innerHTML = "";

        stoppedRef.current = false;
        const html5QrCode = new Html5Qrcode("reader");
        qrRef.current = html5QrCode;

        try {
            await html5QrCode.start(
                { facingMode: { exact: "environment" } },
                { fps: 10, qrbox: { width: 250, height: 250 } },
                (decodedText: string) => {
                    if (stoppedRef.current) return;
                    stoppedRef.current = true;
                    html5QrCode.stop()
                        .catch(() => {})
                        .finally(() => {
                            setScanResult(decodedText);
                            onScan?.(decodedText);
                        });
                },
                () => { /* ignore per-frame decode errors */ }
            );
        } catch (err) {
            console.error("Camera start failed:", err);
        }
    };

    useEffect(() => {
        if (selectedEventId) {
            startScanner();
        }

        return () => {
            if (qrRef.current) {
                try {
                    qrRef.current.stop().catch(() => {});
                    qrRef.current.clear(); // sync, no .catch()
                } catch (_) {}
                qrRef.current = null;
            }
        };
    }, [selectedEventId]);

    const handleScanAnother = () => {
        setScanResult(null);
        startScanner(); // async ensures stop+clear finishes before new start
    };

    return (
        <div className={`relative flex flex-col items-center justify-center w-full min-h-[350px] rounded-2xl border-2 border-dashed transition-colors overflow-hidden ${
            selectedEventId
                ? "border-blue-500/50 bg-[#1C1F26]"
                : "border-white/10 bg-[#1C1F26]/40 p-4"
        }`}>

            {/* No event selected */}
            {!selectedEventId && (
                <div className="flex flex-col items-center gap-4 text-center">
                    <p className="text-white font-medium tracking-wide text-[15px]">
                        Please select an event first
                    </p>
                    <p className="text-xs text-[#A0AEC0]">
                        Scanner will activate upon selection.
                    </p>
                </div>
            )}

            {/* Reader — always mounted so html5-qrcode never loses its DOM node */}
            {selectedEventId && (
                <div className="w-full h-[350px] bg-white rounded-lg overflow-hidden">
                    <div id="reader" className="w-full h-full" />
                </div>
            )}

            {/* Success overlay — absolute on top of reader, does NOT unmount it */}
            {scanResult && (
                <div className="absolute inset-0 flex flex-col items-center gap-3 p-4 justify-center bg-[#1C1F26] z-10">
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-2">
                        <CheckCircle2 size={32} />
                    </div>
                    <p className="text-white font-medium text-[16px]">Scanned Successfully!</p>
                    <p className="text-xs text-[#A0AEC0] max-w-[250px] truncate text-center mb-2">
                        {scanResult}
                    </p>
                    <button
                        onClick={handleScanAnother}
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-semibold transition-colors mt-2"
                    >
                        Scan Another QR
                    </button>
                </div>
            )}
        </div>
    );
};
