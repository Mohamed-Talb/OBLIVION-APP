import type { EventInfo } from "../types";

interface AvailableEventsProps {
  event: EventInfo;
}

export const AvailableEvents = ({ event }: AvailableEventsProps) => {
  return (
    <div className="flex flex-col shrink-0 snap-center w-[85vw] max-w-[300px] bg-[#1e1f26] border border-zinc-700 rounded-[8px] overflow-hidden">
      {/* Image */}
      <div className="w-full h-[180px] bg-zinc-800">
        <img
          className="w-full h-full object-cover"
          src={event.image}
          alt={event.title}
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-col p-4 w-full">
        {/* Header Row: Title & Date */}
        <div className="flex flex-row items-center justify-between w-full mb-3">
          <h3 className="text-white font-bold text-lg">{event.title}</h3>
          <span className="text-zinc-300 font-bold text-xs tracking-wider">
            {event.date}
          </span>
        </div>

        {/* Description */}
        <p className="text-zinc-300 text-sm leading-snug mb-5">
          {event.description}
        </p>

        {/* Buttons Row */}
        <div className="grid grid-cols-2 gap-3 w-full mt-5">
          <button className="bg-[#3b9af0] hover:bg-[#3488d5] text-white font-semibold text-sm rounded-[6px] py-2.5 transition-colors">
            View Details
          </button>
          <button className="bg-[#26cd9c] hover:bg-[#20b88b] text-white font-semibold text-sm rounded-[6px] py-2.5 transition-colors">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};
