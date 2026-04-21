import { events } from "../Mock_data/events";
import { EventCard } from "./EventCard";

interface EventsListedProps {
    filter: "all" | "active" | "finished";
}

export const EventsListed = ({ filter }: EventsListedProps) => {
    const filtered = filter === "all"
        ? events
        : events.filter((e) => e.status === filter);

    return (
        <div className="flex flex-col w-full gap-3 mt-4 px-2">
            {filtered.length > 0 ? (
                filtered.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))
            ) : (
                <p className="text-zinc-500 text-sm text-center py-8">
                    No {filter} events found.
                </p>
            )}
        </div>
    );
}
   