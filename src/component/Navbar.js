import React, { useEffect, useState } from "react";
import LogoLight from "../assets/Images/logo-light.svg";
import LogoDark from "../assets/Images/logo-dark.svg";
import { NavLink } from "react-router-dom";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Mode from "../redux/action/mode";

function Navbar() {
  const [MyMode] = useSelector((state) => state.Mode);

  const dispatch = useDispatch();
  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", MyMode);
  }, [MyMode]);

  return (
    <>
      <header>
        <div className="containerX">
          <nav className="navbar">
            <NavLink className="navlogo" to="/">
              <img src={MyMode === "dark" ? LogoDark : LogoLight} alt="" />
            </NavLink>
            <ul className="nav-ul">
              <li className="nav-item">
                <NavLink className="navlink" to="/">
                  HOME Urvish
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navlink" to="cart">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navlink" to="cart">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navlink" to="cart">
                  Wish list
                </NavLink>
              </li>
              <li className="nav-item modeIcon">
                {MyMode === "dark" ? (
                  <MdLightMode onClick={() => dispatch(Mode("light"))} />
                ) : (
                  <MdOutlineLightMode onClick={() => dispatch(Mode("dark"))} />
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
