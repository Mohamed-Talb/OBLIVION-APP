import { Calendar, MapPin } from "lucide-react";
import type { EventInfo } from "../types";

interface EventCardProps {
  event: EventInfo;
}

export const EventCard = ({ event }: EventCardProps) => {
  const isActive = event.status === "active";

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
        <div className="flex flex-col gap-1 justify-start items-start w-full">
          {/* Status Badge */}
          <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full mb-1 ${isActive
            ? "text-green-400 border border-green-400"
            : "text-white border border-white-400"
            }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-green-400" : "bg-zinc-500"}`} />
            {isActive ? "Active" : "Finished"}
          </span>
          <h4 className="text-white font-semibold text-base mb-1.5 text-start">
            {event.title}
          </h4>
          <p className="text-[#A0AEC0] text-sm leading-snug line-clamp-2 text-start">
            {event.description}
          </p>
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

