import { Box, Typography, Button } from "@mui/material";
import React from "react";

const BodyPart = ({ data, setBodyPart, bodyPart }) => {
  return (
    <Box
      sx={{
        width: { xs: "40vw", md: "18vw" },
        height: { xs: "25vh", md: "40vh" },
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "1rem",
        borderRadius: "10px",
        cursor: "pointer",
        boxShadow:
          "rgba(255, 255, 255, 0.3) 0px 3px 6px , rgba(255, 255, 255, 0.1) 0px 3px 6px",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      onClick={() => {
        setBodyPart(data.name);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={data.icon} alt="bodypart-icon" className="bodyPartCardIcon" />
      <Typography variant="h5" sx={{ color: "#000", fontWeight: 600 }}>
        {data.name}
      </Typography>
    </Box>
  );
};

export default BodyPart;
