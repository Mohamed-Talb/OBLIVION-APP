import { Header } from "../../components/Header.tsx";
import { NavBar } from "../../components/NavBar.tsx";
import { QRCodeSVG } from "qrcode.react";
import { initialUser } from "../../Mock_data/user";

export const Profile = () => {
  const user = initialUser;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full pt-16 pb-20 px-4 focus:outline-none">
      <Header variant="page" title="Profile & Identity" />

      <div className="flex flex-col w-full max-w-sm mt-8 items-center gap-8">
        {/* Profile Information */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative p-1 rounded-full bg-white">
            <img
              className="w-30 h-30 rounded-full object-cover"
              src={user.image_profile}
              alt={user.name}
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-2xl font-black text-white tracking-wide">
              {user.name}
            </p>
            <p className="text-[15px] font-medium text-zinc-400">
              @{user.username}
            </p>
          </div>
        </div>

        {/* QR Code Container */}
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="bg-white p-4 rounded-3xl flex items-center justify-center transform transition-transform hover:scale-105 duration-300">
            <QRCodeSVG
              value={user.username}
              size={200}
              level={"H"}
              marginSize={1}
            />
          </div>
        </div>
      </div>

      <NavBar />
    </div>
  );
};
