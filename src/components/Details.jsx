import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import { Link } from "react-router-dom";
const Details = ({ exerciseDetails }) => {
  const extraDetails = [
    {
      icon: BodyPartImage,
      name: exerciseDetails.bodyPart,
    },
    {
      icon: TargetImage,
      name: exerciseDetails.target,
    },
    {
      icon: EquipmentImage,
      name: exerciseDetails.equipment,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "fit-content",
        marginBlock: "2rem",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          width: "85vw",
          maxHeight: "max-content",
          minHeight: "fit-content",
          backgroundColor: "#403e3e",
          borderRadius: "10px",
          boxShadow:
            "rgba(255,255,255,0.15) 0px 0px 5px,rgba(255,255,255,0.3) 2px 2px 8px",
        }}
      >
        <img
          src={exerciseDetails.gifUrl}
          alt={exerciseDetails.name}
          className="exerciseImage"
        />
        <Stack sx={{ margin: { xs: "0rem 2rem" } }}>
          <Typography
            variant="h3"
            sx={{ marginBlock: { md: "1rem" }, color: "#FF2625" }}
            textTransform="capitalize"
          >
            {exerciseDetails.name}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              lineHeight: { xs: "1.2", md: "unset" },
              marginBlock: { xs: "1rem", md: "0" },
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
            textTransform="capitalize"
          >
            {" "}
            Exercises keep you healthy and strong.{" "}
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                color: "#FF2625",
              }}
            >
              {exerciseDetails.name}
            </Typography>{" "}
            is one of the best exercises to target your
            <a href="#target">
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                  color: "#FF2625",
                  cursor: "pointer",
                }}
              >
                {exerciseDetails.target}.
              </Typography>
            </a>
            It can be done just by using{" "}
            <a href="#equipment">
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                  color: "#FF2625",
                }}
                textTransform="capitalize"
                href="#equipment"
              >
                {exerciseDetails.equipment}.
              </Typography>
            </a>
          </Typography>
          <Box>
            {extraDetails.map((item, key) => (
              <Box
                key={key}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                  marginBlock: { xs: "1rem", md: "2rem" },
                }}
              >
                <img src={item.icon} alt="icon" className="exerciseIcon" />
                <Typography variant="h5" textTransform="capitalize">
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Details;
