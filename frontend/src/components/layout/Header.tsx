import Logo from "./Logo";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router";

function Header() {
  const navList = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "How It Works", path: "/howitworks" },
    { name: "FAQ", path: "/faq" },
    { name: "About", path: "/about" },
  ];

  const handleAddToChrome = () => {
    const extensionUrl = import.meta.env.VITE_CHROME_EXTENSION_URL;

    if (!extensionUrl) {
      alert("GoLink extension is currently in development.");
      return;
    }

    window.open(extensionUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <header>
      <div className="flex items-center justify-between px-5 font-medium">
        <Logo />

        <div className="grid grid-cols-6 gap-5">
          {navList.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-slate-600"
              }
            >
              <button className="hover:font-bold">{item.name}</button>
            </NavLink>
          ))}
        </div>

        <div className="flex gap-10 items-center">
          <button
            type="button"
            onClick={handleAddToChrome}
            className="flex items-center gap-3 bg-blue-500 text-white p-3 rounded-xl hover:shadow-sm hover:bg-blue-600 cursor-pointer"
          >
            <FcGoogle className="text-sky-300 w-10 h-10" />
            <span>Add to Chrome</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
