import { Box, Button, Typography } from "@mui/material";
import BackgroundLarge from "../assets/images/backgorundDark.jpg";
import BackgroundSmall from "../assets/images/backgroundLight.jpg";
const HeroSection = ({ darkMode }) => {
  return (
    <Box
      sx={{
        backgroundImage: {
          md: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${BackgroundLarge})`,
          xs: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)),url(${BackgroundSmall})`,
        },

        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "cover", md: "100%" },
        backgroundPosition: { xs: "0% 0%", md: "50% 50%" },
        maxHeight: "fit-content",
        padding: { xs: "2rem", md: "unset" },
      }}
    >
      <Box
        sx={{
          display: { xs: "flex" },
          flexDirection: "column",
          alignItems: { xs: "center", md: "unset" },
          padding: { md: "4rem 8rem" },
          zIndex: 1,
          position: "inherit",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "rgb(255, 38, 37)",
            fontSize: { xs: "2rem", md: "5rem" },
            fontWeight: 600,
          }}
        >
          Fitness Freak
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,
            marginTop: { xs: "1rem", md: "2rem" },
            lineHeight: { xs: "2.5rem", md: "4rem" },
            fontSize: { xs: "2rem", md: "4rem" },
          }}
        >
          Sweat, Smile
          <br />
          And Repeat
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            marginTop: "2rem",
            fontSize: { xs: "1.5rem", md: "2.5rem" },
            fontWeight: "400",
            textAlign: { xs: "center", md: "unset" },
          }}
        >
          Check out the most effective <br /> exercises personalized to you
        </Typography>
        <Button
          sx={{
            backgroundColor: "rgb(255, 38, 37)",
            color: "#fff",
            padding: { xs: ".75rem", md: "1rem" },
            fontSize: { md: "1rem" },
            fontWeight: 600,
            marginTop: "3rem",
            width: { xs: "60vw", sm: "30vw", md: "18vw" },
            maxWidth: "60vw",
          }}
          href="#search"
        >
          Explore Exercises
        </Button>
      </Box>
      <Box sx={{ display: { xs: "none", xl: "flex" }, marginLeft: "7rem" }}>
        <Typography
          variant="h1"
          sx={{
            color: "rgb(255, 38, 37)",
            opacity: "0.15",
            fontSize: "20rem",
            fontWeight: 600,
          }}
        >
          Exercise
        </Typography>
        <Box sx={{ position: "absolute", top: 0, right: 60 }}></Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
