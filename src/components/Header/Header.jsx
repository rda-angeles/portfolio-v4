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
  const [navColor, setNavColor] = useState("#303841");
  // const [navFix, setNavFix] = useState("inherit");

  // const listenScrollEvent = useCallback(() => {
  //   if (window.scrollY > 10) {
  //     setNavColor("#00ADB5");
  //     // setNavFix("fixed");
  //   } else {
  //     setNavColor(navColor);
  //     // setNavFix(navFix);
  //   }
  // }, [navColor]);
  const listenScrollEvent = () => {
    if (window.scrollY > 10) {
      setNavColor("#00ADB5");
      // setNavFix("fixed");
    } else {
      setNavColor(navColor);
      // setNavFix(navFix);
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
      className="flex justify-between items-center w-full h-20 px-4 z-30 header "
      style={{
        backgroundColor: navColor,
        transition: "all .3s",
        position: "fixed",
        color: "white",
      }}
    >
      {/* Medium to Larger Device */}

      <div className="flex justify-between items-center w-full mx-auto container">
        {/* Logo/Name */}
        <div className="logo h-[100%] cursor-pointer max-w-[7rem] ">
          <Link to={"/"}>
            <img
              src={Logo}
              alt="RDA Logo"
              className="header-logo"
              style={{
                filter: "invert(1)",
              }}
            />
          </Link>
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
        className="mobile-menu cursor-pointer z-20 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? (
          <CloseIcon
            size={25}
            style={{
              color: nav ? "white" : "black",
            }}
          />
        ) : (
          <MenuIcon size={25} />
        )}
      </div>

      {/* Mobile menu link */}
      {nav && (
        <ul className="w-full h-screen absolute top-0 left-0 bg-c-primary flex justify-center items-center flex-col menu-link z-10 text-white">
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
