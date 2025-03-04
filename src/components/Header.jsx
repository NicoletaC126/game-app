import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { BrightnessHighFill, MoonStarsFill } from "react-bootstrap-icons";
import { useContext } from "react";
import { ThemeContext } from "../store/theme/context";
import { Button } from "react-bootstrap";

const navLinks = [
  {
    id: "home",
    path: "/",
  },
  {
    id: "heroes",
    path: "/heroes",
  },
  {
    id: "favorites",
    path: "/favorites",
  },
  {
    id: "teams",
    path: "/teams",
  },
];

const Header = () => {
  const location = useLocation();
  const { themeState, themeDispatch } = useContext(ThemeContext);

  return (
    <header>
      <nav
        className={`d-flex justify-content-between align-items-center p-4 bg-${themeState}`}
      >
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Dota_logo.svg/204px-Dota_logo.svg.png"
            alt="logo"
          />
        </Link>

        {navLinks.map((route) => (
          <Link
            key={route.id}
            to={route.path}
            className={`fw-bold text-decoration-none ${
              location.pathname === route.path ? "is-active" : null
            }`}
          >
            {route.id.toLocaleUpperCase()}
          </Link>
        ))}

        <Button
          onClick={() => {
            themeState === "light"
              ? themeDispatch({ type: "CHANGE_TO_DARK" })
              : themeDispatch({ type: "CHANGE_TO_LIGHT" });

            localStorage.setItem(
              "theme",
              themeState === "light" ? "dark" : "light"
            );
          }}
          className="d-flex"
        >
          {themeState === "light" ? <BrightnessHighFill /> : <MoonStarsFill />}
        </Button>
      </nav>
    </header>
  );
};

export default Header;
