import { Box, Typography } from "@mui/material";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import Logo from "../assets/images/logo.png";
import { useEffect } from "react";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#403e3e",
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        height: { xs: "8vh", md: "15vh" },
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "1rem", md: "3rem" },
        }}
      >
        <Box
          sx={{ display: "flex", gap: { md: "0.3rem" }, alignItems: "center" }}
        >
          <img src={Logo} alt="logoFooter" className="footerlogoImg" />
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "1rem", md: "1.5rem" }, fontWeight: 600 }}
          >
            Fitness Freak
          </Typography>
        </Box>

        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "0.75rem", md: "1.5rem" },
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          Made with
          <FavoriteSharpIcon
            sx={{ color: "#FF2625", fontSize: { xs: "1rem", md: "2rem" } }}
          />
          by
          <a
            href="https://github.com/kaushikc005"
            target="_blank"
            className="footerLink"
          >
            kaushiK
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
