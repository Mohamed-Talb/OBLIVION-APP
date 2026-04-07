import { House, User, History } from "lucide-react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="fixed bottom-2 left-2 right-2 z-50 mx-auto max-w-[414px] flex items-center justify-between px-4 py-1 bg-zinc-900 border border-zinc-700 text-white font-medium rounded-[5px]">
      <div className="flex items-center justify-between w-full px-5">
        <Link to="/" className="flex flex-col items-center gap-1">
          <House />
          <span className="text-xs">Home</span>
        </Link>

        <Link to="/pastevents" className="flex flex-col items-center gap-1">
          <History />
          <span className="text-xs">History</span>
        </Link>

        <Link to="/profile" className="flex flex-col items-center gap-1">
          <User />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </nav>
  );
};
