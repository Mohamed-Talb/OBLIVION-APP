import { useState } from "react";
import { NavBarAdmin } from "../../components/NavBarAdmin";
import { Header } from "../../components/Header";
import { EventsListed } from "../../components/EventsListed";

type Filter = "all" | "active" | "finished";

const FILTERS: { label: string; value: Filter }[] = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Finished", value: "finished" },
];

export const Events = () => {
    const [filter, setFilter] = useState<Filter>("all");

    return (
        <div className="flex flex-col items-center justify-start min-h-screen w-full pt-21 pb-20 px-1 focus:outline-none">
            <Header variant="page" title="All Events" />

            {/* Filter Tabs */}
            <div className="flex flex-row w-full gap-2 px-2 mb-1">
                {FILTERS.map((f) => (
                    <button
                        key={f.value}
                        onClick={() => setFilter(f.value)}
                        className={`flex-1 py-2 text-sm font-semibold rounded-[5px] border transition-colors ${
                            filter === f.value
                                ? "bg-white text-black border-white"
                                : "bg-zinc-900 text-zinc-400 border-zinc-700 hover:text-white"
                        }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            <EventsListed filter={filter} />
            <NavBarAdmin />
        </div>
    );
}