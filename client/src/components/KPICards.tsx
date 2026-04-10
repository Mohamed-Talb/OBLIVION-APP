import { kpis } from "../Mock_data/kpi";

export const KPICards = () => {
    return (
        <div className="flex flex-row items-center justify-between w-full px-2 gap-4 mb-8 mt-2">
            {kpis.map((kpi) => (
                <div 
                    key={kpi.id} 
                    className="flex flex-col items-center justify-center p-5 bg-[#1C1F26] rounded-lg shadow-sm border border-white/5 flex-1"
                >
                    <span className="text-[12px] font-semibold text-white/80 tracking-wider mb-3">
                        {kpi.title}
                    </span>
                    <span className="text-[28px] font-black text-white">
                        {kpi.value}
                    </span>
                </div>
            ))}
        </div>
    )
}