export const AvailableEvents = () => {
    return (
        <div className="flex flex-col shrink-0 snap-center w-[85vw] max-w-[300px] bg-[#1e1f26] border border-zinc-700 rounded-[8px] overflow-hidden">
            {/* Image Placeholder */}
            <div className="w-full h-[180px] bg-zinc-800">
                <img 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=400&q=80" 
                    alt="Workshop" 
                />
            </div>

            {/* Content Area */}
            <div className="flex flex-col p-4 w-full">
                
                {/* Header Row: Title & Date */}
                <div className="flex flex-row items-center justify-between w-full mb-3">
                    <h3 className="text-white font-bold text-lg">work Shop 1</h3>
                    <span className="text-zinc-300 font-bold text-xs tracking-wider">15-04-2025</span>
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-sm leading-snug mb-5">
                    Gourmet farm-to-table dining experience set in a hidden rooftop vertical garden.
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
}