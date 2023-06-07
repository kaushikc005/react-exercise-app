import React, { useState, useEffect } from "react";
import { Box, Button,Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import ClearAllSharpIcon from "@mui/icons-material/ClearAllSharp";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [menuButton, setMenuButton] = useState(false);

  const showMenuButton = () => {
    if (window.innerWidth > 768) setMenuButton(false);
    else setMenuButton(true);
  };

  useEffect(() => {
    window.addEventListener("resize", showMenuButton);
    showMenuButton();
  }, []);

  const handleClick = () => {
    setClick((prev) => !prev);
    if (click)
      document.getElementById("#menuToggle").classList.remove("navShowMenu");
    else document.getElementById("#menuToggle").classList.add("navShowMenu");
  };

  return (
    <Box sx={{ backgroundColor: "#403e3e" }}>
      <Box
        id="navbar"
        sx={{
          display: "flex",
          height: "10vh",
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: "0rem", md: "1rem 2rem" },
          position: "sticky",
          top: 0,
        }}
      >
        <Link to="/">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "1rem",
            }}
          >
            <img src={Logo} alt="logo" className="logo" />
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1rem", md: "2rem" }, fontWeight: 600 }}
            >
              Fitness Freak
            </Typography>
          </Box>
        </Link>

        <nav>
          <ul
            id="#menuToggle"
            className={`${
              menuButton ? "navMobileMenu" : "navDesktopMenu"
            } navMenu`}
          >
            <li className="navMenuItem">
              <a href="/">Home</a>
            </li>
            <li className="navMenuItem">
              <a href="#exercise">Exercises</a>
            </li>
            <li className="navMenuItem">
              <Button
                className="navMenuSearch"
                sx={{
                  backgroundColor: "#FF2625",
                  color: "#fff",
                  fontSize: "1.25rem",
                }}
                href="/#search"
              >
                Search Exercises
              </Button>
            </li>
          </ul>
        </nav>

        {menuButton && (
          <Box sx={{ marginRight: "1rem" }}>
            {click ? (
              <ClearSharpIcon sx={{ fontSize: "3rem" }} onClick={handleClick} />
            ) : (
              <ClearAllSharpIcon
                sx={{ fontSize: "3rem" }}
                onClick={handleClick}
              />
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
