import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isLoggedUser } from "../../../service/storeUserInfo";
import Icon from "../../Buttons/Icon";
import Button from "../../Buttons/Button";
import BrandLogo from "../BrandLogo/BrandLogo";

const Navbar = () => {
  const isLogged = isLoggedUser();
  // Mobile Menu State 
  const [mobileMenu, setMobileMenu] = useState(false);
  // Menus List
  const menus = [
    "Home",
    "About",
    "Services",
    "Schedule",
    "Gallery", 
    "Contact",
  ];

  return (
    <div className="bg-[#00000080] py-4 fixed top-0 z-50 w-full backdrop-blur-sm">
      {/* Mobile Menu */}
      <div className="flex items-center justify-between mx-2 sm:mx-6 md:mx-10 lg:hidden">
        <Link to="/">
          <BrandLogo size="text-2xl" textClassName="text-white" />
        </Link>
        <div className="mx-4">
          {mobileMenu ? (
            <button onClick={() => setMobileMenu(false)} aria-label="Close menu">
              <Icon IconName="fa-solid fa-xmark" color="white" size="xl"></Icon>
            </button>
          ) : (
            <button onClick={() => setMobileMenu(true)} aria-label="Open menu">
              <Icon IconName="fa-solid fa-bars" color="white" size="xl"></Icon>
            </button>
          )}
        </div>
        {mobileMenu && (
          <ul className="absolute bg-white w-[90%] top-20 -left-[20px] px-2 mx-10 pb-4 shadow-lg rounded">
            {menus.map((menu, index) => {
              return (
                <Link
                  to={menu === "Home" ? "/" : menu.toLowerCase()}
                  key={index}
                  onClick={() => setMobileMenu(false)}
                  className="font-roboto font-medium block px-4 py-2 mt-2 text-sm text-black hover:text-main text-xl font-light transition duration-300"
                >
                  <li>{menu}</li>
                </Link>
              );
            })}
            <li className="block px-4 mt-2 text-white hover:text-main text-xl font-light transition duration-300">
              {isLogged ? (
                <button className="mx-2 h-full">
                  <Link to="/dashboard">
                    <Icon
                      IconName="fa-regular fa-user"
                      color="main"
                      size="xl"
                    ></Icon>
                  </Link>
                </button>
              ) : (
                <Link to="/login">
                  <Button>
                    <span className="px-2">Log In</span>
                    <Icon
                      IconName="fa-solid fa-arrow-right-to-bracket"
                      color="white"
                      size="2xl"
                    ></Icon>
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        )}
      </div>
      {/* Mobile Menu */}
      {/* Desktop Menu */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between lg:mx-10 xl:mx-20">
          <div>
            <Link to="/">
              <BrandLogo size="text-3xl" textClassName="text-white" />
            </Link>
          </div>
          <div className="flex items-center">
            {/* Menus */}
            <ul className="flex items-center">
              {menus.map((menu, index) => {
                return (
                  <Link
                    to={menu === "Home" ? "/" : menu.toLowerCase()}
                    key={index}
                    className="font-roboto font-medium block px-4 py-2 mt-2 text-white hover:text-main text-xl font-light transition duration-300"
                  >
                    <li>{menu}</li>
                  </Link>
                );
              })}
              <li className="block px-4 mt-2 text-white hover:text-main text-xl font-light transition duration-300">
                {isLogged ? (
                  <button className="mx-2 h-full">
                    <Link to="/dashboard">
                      <Icon
                        IconName="fa-regular fa-user"
                        color="main"
                        size="xl"
                      ></Icon>
                    </Link>
                  </button>
                ) : (
                  <Link to="/login">
                    <Button>
                      <span className="px-2">Log In</span>
                      <Icon
                        IconName="fa-solid fa-arrow-right-to-bracket"
                        color="white"
                        size="2xl"
                      ></Icon>
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Desktop Menu */}
    </div>
  );
};

export default Navbar;
