import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";

function Navbar() {
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", mode);
  }, [mode]);
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar">
            <NavLink className="navlogo" to="/">
              NAVBAR
            </NavLink>
            <ul className="nav-ul">
              <li className="nav-item">
                <NavLink className="navlink" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navlink" to="cart">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item modeIcon">
                {mode === "dark" ? (
                  <MdLightMode onClick={() => setMode("light")} />
                ) : (
                  <MdOutlineLightMode onClick={() => setMode("dark")} />
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
