import { NavBar } from "../components/NavBar.tsx";
import { Header } from "../components/Header.tsx";
import { AvailableEvents } from "../components/AvailableEvents.tsx";
import { RegetredEvents } from "../components/RegetredEvents.tsx";
import { ChevronRight } from "lucide-react";
import { events } from "../Mock_data/events";
import { AddEventForm } from "../components/AddEventForm.tsx";


export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full pt-24 pb-20 px-4 focus:outline-none">
      <Header />

      {/* <div className="flex flex-row items-center justify-between w-full px-2">
        <h3 className="text-white font-medium mb-2">Available events</h3>
        <button className="text-blue-500 font-[12px] flex flex-row items-center gap-2">
          See All <ChevronRight className="size-4" />
        </button>
      </div>

      <div className="flex flex-row items-center w-full px-2 mt-3 gap-4 overflow-x-auto snap-x pb-4 [&::-webkit-scrollbar]:hidden">
        {events.slice(0, 3).map((event) => (
          <AvailableEvents key={event.id} event={event} />
        ))}
      </div>

      <div className="w-full px-2">
        <RegetredEvents />
      </div> */}

      <AddEventForm />

      <NavBar />
    </div>
  );
};
