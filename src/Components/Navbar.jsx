import { Component, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { MenuItems } from "../Components/MenuItems.js";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [menuicon, setmenuicon] = useState(false);

  function menuChangeHandler() {
    setmenuicon(!menuicon);
  }

  return (
    <div>
      <nav className="nav-items">
        <h1 className="nav-logo">Trippy</h1>
        <div className="menu-icon" onClick={menuChangeHandler}>
          {menuicon ? <RxCross1 /> : <GiHamburgerMenu />}
        </div>
        <ul className=" nav-menu  ">
          {MenuItems.map(function (item, index) {
            return (
              <li>
                <NavLink className="links" to={item.url}>
                  {item.icon} {item.title}
                </NavLink>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
