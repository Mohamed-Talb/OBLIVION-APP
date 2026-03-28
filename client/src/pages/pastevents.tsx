import { Header } from "../components/Header.tsx";
import { NavBar } from "../components/NavBar.tsx";
import { EventCard } from "../components/EventCard.tsx";
import { events } from "../Mock_data/events";


export const PastEvents = () => {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen w-full pt-20 pb-20 px-4 focus:outline-none">
            <Header variant="page" title="Past Events" />

            <div className="flex flex-col gap-4 w-full px-2">
                {events.map((item) => (
                    <EventCard key={item.id} event={item} />
                ))}
            </div>

            <NavBar />
        </div>
    )
}