import { LogOut, ChevronLeft } from "lucide-react";
import avatar from "../assets/man-avatar.png";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  variant?: "home" | "page";
  title?: string;
}

export const Header = ({ variant = "home", title }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-2 left-2 right-2 z-50 mx-auto max-w-[414px] flex items-center justify-between px-4 py-2 bg-zinc-900 border border-zinc-700 text-white font-medium rounded-[5px]">
      <div className="flex items-center justify-between w-full h-10 relative">
        {/* Left Section */}
        {variant === "home" ? (
          <div className="flex items-center gap-3">
            <img src={avatar} alt="Logo" className="w-10 h-10 rounded-full" />
            <div className="flex flex-col items-start">
              <p className="text-sm">Lachhab Oussama</p>
              <p className="text-xs text-zinc-400">@olachhab</p>
            </div>
          </div>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="flex items-center justify-center p-1.5 -ml-1 hover:bg-zinc-800 rounded-md transition-colors z-10"
            >
              <ChevronLeft size={22} className="text-zinc-300" />
            </button>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="text-[18px] font-semibold tracking-wide text-center">
                {title}
              </p>
            </div>
          </>
        )}

        {/* Right Section */}
        <button className="flex items-center p-1.5 -mr-1 hover:bg-zinc-800 rounded-md transition-colors group z-10">
          <LogOut
            className="text-red-500 group-hover:text-red-400 transition-colors"
            size={20}
          />
        </button>
      </div>
    </header>
  );
};
