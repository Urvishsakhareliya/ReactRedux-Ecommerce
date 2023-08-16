import React, { useEffect, useState } from "react";
import LogoLight from "../assets/Images/logo-light.svg";
import LogoDark from "../assets/Images/logo-dark.svg";
import { NavLink } from "react-router-dom";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import Mode from "../redux/action/mode";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [MyMode] = useSelector((state) => state.Mode);

  const dispatch = useDispatch();
  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", MyMode);
  }, [MyMode]);

  return (
    <>
      <header>
        {isOpen ? (
          <div
            className="blackLayer d-lg-none"
            onClick={() => setIsOpen(false)}
          ></div>
        ) : (
          ""
        )}

        <div className="containerX">
          <nav className="navbar">
            <TiThMenu
              className="d-lg-none colorPrimary"
              onClick={() => setIsOpen(true)}
            />

            <NavLink className="navlogo" to="/">
              <img src={MyMode === "dark" ? LogoDark : LogoLight} alt="" />
            </NavLink>
            <ul className={`nav-ul ${isOpen ? "active" : ""}`}>
              <li className="nav-item d-block d-lg-none mob_logo">
                <NavLink className="navlogo" to="/">
                  <img src={MyMode === "dark" ? LogoLight : LogoDark} alt="" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navlink" to="/">
                  HOME
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
            </ul>

            <ul className="FlexUl">
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
