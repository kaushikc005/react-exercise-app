import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`}>
      <Box
        sx={{
          width: { xs: "80vw", sm: "20vw", md: "20vw" },
          height: { xs: "32vh", sm: "40vh", md: "45vh" },
          maxWidth: { xs: "80vw", sm: "20vw", md: "20vw" },
          maxHeight: { xs: "45vh", md: "48vh" },
          backgroundColor: "#fff",
          margin: { xs: "0 1.25rem", md: "0" },
          cursor: "pointer",
          borderBlock: "3px solid red",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: { xs: "1rem", md: "2rem" },
          borderRadius: "20px",
          boxShadow:
            "rgba(255, 255, 255, 0.3) 0px 3px 10px, rgba(255, 255, 255, 0.23) 0px 3px 6px",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow:
              "rgba(255, 255, 255, 1) 0px 3px 10px, rgba(255, 255, 255, 1) 0px 3px 6px",
            transform: "scale(1.01)",
          },
        }}
        textTransform="capitalize"
      >
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          className="exerciseCardImage"
        />

        <Stack
          direction="row"
          sx={{
            width: "max-content",

            display: "flex",
            gap: { xs: "2rem", md: "5rem" },
            marginBlock: "1rem",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "0.75rem", md: "1rem" },
              width: { md: "max-content" },
              height: "2rem",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FF2625",
              color: "#fff",
              borderRadius: "25px",
              padding: { xs: "0.5rem 1rem", md: "0.5rem 1.5rem" },
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px,rgba(0, 0, 0, 0.23) 0px 3px 6px",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#FF2625",
              },
              cursor: "default",
            }}
          >
            {exercise.bodyPart}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "0.75rem", md: "1rem" },
              lineHeight: "1rem",
              width: "min-content",
              height: "2rem",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              color: "#FF2625",
              borderRadius: "20px",
              padding: { xs: "0.5rem 1rem", md: "0.5rem 1.5rem" },
              cursor: "default",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px,rgba(0, 0, 0, 0.23) 0px 3px 6px",
              "&:hover": {
                backgroundColor: "#FF2625",
                color: "#fff",
              },
            }}
          >
            {exercise.target}
          </Typography>
        </Stack>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.2rem" },
            width: "100%",
            color: "#000",
            fontWeight: 600,
            padding: "1rem 2rem",
            marginTop: { xs: "-1rem" },
            wordWrap: "break-word",
            textAlign: "center",
          }}
        >
          {exercise.name}
        </Typography>
      </Box>
    </Link>
  );
};

export default ExerciseCard;
