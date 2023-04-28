import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { MenuItems } from "../Components/MenuItems.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [menuicon, setmenuicon] = useState(false);

  function menuChangeHandler() {
    setmenuicon(!menuicon);
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div>
      <nav className="nav-items">
        <NavLink to="/">
          <h1 className="nav-logo font-bold">Tour & Guide</h1>{" "}
        </NavLink>
        <div className="menu-icon" onClick={menuChangeHandler}>
          {menuicon ? <RxCross1 /> : <GiHamburgerMenu />}
        </div>
        <ul className={menuicon ? "nav-menu active" : "nav-menu "}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <NavLink className="links" to={item.url}>
                <span
                  onClick={topFunction}
                  className="flex items-center justify-center gap-2 mx-auto"
                >
                  {item.icon} {item.title}
                </span>
              </NavLink>
            </li>
          ))}
          <NavLink to="/SignUp">
            <button>Sign Up</button>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
