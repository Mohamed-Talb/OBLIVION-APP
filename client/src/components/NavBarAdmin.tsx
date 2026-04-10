import { House, User, Calendar, SquarePlus, ScanLine } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const NavBarAdmin = () => {
  const location = useLocation();

  const navItems = [
    { to: "/admin", icon: House, label: "Home" },
    { to: "/admin/scan", icon: ScanLine, label: "Scan" },
    { to: "/admin/events", icon: Calendar, label: "Events" },
    { to: "/admin/addEvent", icon: SquarePlus, label: "Add Event" },
    { to: "/admin/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-2 left-2 right-2 z-50 mx-auto max-w-[414px] flex items-center justify-between px-2 bg-zinc-900 border border-zinc-700 text-white font-medium rounded-[5px]">
      <div className="flex items-center justify-between w-full px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center mt-1 px-2 transition-colors ${isActive ? "text-white" : "text-zinc-300 hover:text-white"
                }`}
            >
              <item.icon size={22} strokeWidth={isActive ? 2.5 : 1.8} />
              <span className="text-[10px] text-white/90">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};