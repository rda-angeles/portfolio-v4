import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const navLinks = [
    { id: 1, navLink: "Home", path: "/" },
    { id: 2, navLink: "Projects & Skills", path: "/projects-skills" },
    { id: 3, navLink: "Contact", path: "/contact" },
  ];

  const [nav, setNav] = useState(false);
  const [navColor, setNavColor] = useState("white");
  const [navTextColor, setNavTextColor] = useState("black");
  const [navFix, setNavFix] = useState("inherit");
  const [logoScrolled, setLogoScrolled] = useState("invert(0)");

  const listenScrollEvent = () => {
    const headerScroll = document.querySelector(".header");

    if (window.scrollY > 10) {
      setNavColor("#126E82");
      setNavTextColor("white");
      setNavFix("fixed");
      setLogoScrolled("invert(1)");
      headerScroll.classList.add("scroll");
    } else {
      setNavColor("white");
      setNavTextColor("black");
      setNavFix("inherit");
      setLogoScrolled("invert(0)");
      headerScroll.classList.remove("scroll");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div
      className="flex justify-between items-center w-full h-20 px-4 z-30 header"
      style={{
        backgroundColor: navColor,
        transition: "all .3s",
        position: navFix,
        color: navTextColor,
      }}
    >
      {/* Medium to Larger Device */}

      <div className="flex justify-between items-center w-full mx-auto container">
        {/* Logo/Name */}
        <div className="logo h-[100%] cursor-pointer max-w-[7rem] ">
          <img
            src={Logo}
            alt="RDA Logo"
            className="header-logo"
            style={{
              filter: logoScrolled,
            }}
          />
        </div>
        {/* Links */}
        <ul className="nav-links hidden md:flex">
          {navLinks.map(({ id, navLink, path }) => (
            <NavLink
              key={id}
              className="px-4 text-sm cursor-pointer"
              style={({ isActive }) =>
                isActive ? { fontWeight: "bolder" } : undefined
              }
              to={path}
            >
              {navLink}
            </NavLink>
          ))}
        </ul>
      </div>

      {/* Mobile menu -- Smaller Device */}
      <div
        className="mobile-menu cursor-pointer md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? (
          <CloseIcon size={25} color={nav ? "white" : "black"} />
        ) : (
          <MenuIcon size={25} />
        )}
      </div>

      {/* Mobile menu link */}
      {nav && (
        <ul className="w-full h-screen absolute top-0 left-0 bg-c-primary flex justify-center items-center flex-col menu-link">
          {navLinks.map(({ id, navLink, path }) => (
            <Link
              key={id}
              className="py-6 capitalize cursor-pointer text-3xl"
              to={path}
              onClick={() => setNav(!nav)}
            >
              {navLink}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
