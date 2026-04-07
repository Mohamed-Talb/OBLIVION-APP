import { Calendar, MapPin } from "lucide-react";
import { registeredEvents } from "../Mock_data/registeredEvents";

export const RegetredEvents = () => {
  return (
    <div className="flex flex-col w-full justify-start items-start mt-5">
      <h3 className="text-white font-medium px-2 mb-5">Registered Events</h3>

      <div className="flex flex-col gap-3 w-full">
        {registeredEvents.map((event) => (
          <div
            key={event.id}
            className="flex flex-row items-center justify-between p-3 bg-[#1e1f26] border border-zinc-700 rounded-[8px] w-full"
          >
            {/* Event Info (Image + Text) */}
            <div className="flex flex-row items-center gap-4">
              <img
                className="w-[60px] h-[60px] rounded-[6px] object-cover"
                src={event.image}
                alt={event.title}
              />
              <div className="flex flex-col">
                <h4 className="text-white font-medium text-[15px] mb-1">
                  {event.title}
                </h4>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-zinc-400 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-zinc-400 text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cancel Button */}
            <button className="flex flex-col items-center justify-center bg-red-500 hover:bg-red-500/20 text-white px-3 py-1.5 rounded-[6px] font-medium text-xs transition-colors">
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
