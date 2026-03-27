import logo from "../assets/logo_white.png";

export const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" width={250} height={250} />
        </div>
    );
};
