import { NavLink } from "react-router";
import Logo from "./Logo";
function Footer() {
  const productMenu = [
    { name: "Features", path: "/features" },
    { name: "How It Works", path: "/howitworks" },
    { name: "FAQ", path: "/faq" },
    { name: "About", path: "/about" },
  ];
  const companyMenu = [
    { name: "Privacy Policy", path: "/privacypolicy" },
    { name: "Terms of Service", path: "termsofservice" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <>
      <div className="px-10 text-slate-600 grid grid-cols-3 items-center border-t border-slate-200">
        <div>
          <Logo />
          <p className="w-xs">
            The browser extension that lets you go anywhere with one word.
          </p>
          <p>Type less. Browse faster</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Product</p>
          {productMenu.map((item) => (
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-slate-600"
              }
            >
              <button>{item.name}</button>
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Company</p>
          {companyMenu.map((item) => (
            <NavLink to={item.path}>
              <button>{item.name}</button>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default Footer;
