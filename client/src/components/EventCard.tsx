import { Calendar, MapPin } from "lucide-react";
import type { EventInfo } from "../types";

interface EventCardProps {
    event: EventInfo;
}

export const EventCard = ({ event }: EventCardProps) => {
    return (
        <div className="flex flex-row w-full bg-[#1C1F26] rounded-[5px] p-3 gap-4 border border-white/5 shadow-sm hover:bg-[#252A36] transition-colors cursor-pointer">
            {/* Image Section */}
            <div className="w-[110px] h-[110px] rounded-[5px] overflow-hidden flex-shrink-0">
                <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Content Section */}
            <div className="flex flex-col flex-1 py-1 justify-between justify-start items-start">
                <div className="flex flex-col gap-1 justify-start items-start">
                    <h4 className="text-white font-semibold text-base mb-1.5 text-start">{event.title}</h4>
                    <p className="text-[#A0AEC0] text-sm leading-snug line-clamp-2 text-start">{event.description}</p>
                </div>
                
                <div className="flex flex-col gap-1.5 mt-3 justify-start items-start">
                    <div className="flex items-center gap-2 text-[#A0AEC0] text-xs font-medium">
                        <Calendar size={14} />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#A0AEC0] text-xs font-medium">
                        <MapPin size={14} />
                        <span className="truncate">{event.location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};