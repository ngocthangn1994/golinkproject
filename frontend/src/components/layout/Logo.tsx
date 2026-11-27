import logo from "../../assets/golink_logo.png";
import { NavLink } from "react-router";
function Logo() {
  return (
    <div className="w-30 h-30">
      <NavLink to="/">
        <img
          alt="golink logo"
          src={logo}
          className="w-full h-full object-contain"
        />
      </NavLink>
    </div>
  );
}

export default Logo;
