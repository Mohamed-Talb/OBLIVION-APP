import { events } from "../Mock_data/events";

interface EventSelectorProps {
    selectedEventId: number | "";
    setSelectedEventId: (id: number) => void;
}

export const EventSelector = ({ selectedEventId, setSelectedEventId }: EventSelectorProps) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#A0AEC0] pl-1">
                Active Event
            </label>
            <div className="relative">
                <select
                    value={selectedEventId}
                    onChange={(e) => setSelectedEventId(Number(e.target.value))}
                    className="w-full bg-[#1C1F26] border border-white/5 rounded-lg py-3.5 px-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none shadow-sm cursor-pointer"
                >
                    <option value="" disabled className="text-zinc-500">Select an event to scan...</option>
                    {events.map((evt) => (
                        <option key={evt.id} value={evt.id}>{evt.title}</option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-[#A0AEC0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};
