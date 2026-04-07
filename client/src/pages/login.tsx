import { Logo } from "../components/Logo";
import intralogo from "../assets/intra_logo_white.svg";

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 focus:outline-none">
      <Logo />
      <button className="flex items-center gap-3 px-10 py-3 bg-zinc-900 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors duration-200">
        <img
          src={intralogo}
          alt="Intra Logo"
          width={20}
          height={20}
          className="object-contain"
        />
        Continue with Intra
      </button>
    </div>
  );
};
