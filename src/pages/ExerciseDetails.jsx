import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";
import { fetchfromAPI } from "../utils/fetchfromAPI";

import { Box, Typography } from "@mui/material";

const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const handleFetch = async () => {
      const exerciseDetailsData = await fetchfromAPI(`exercise/${id}`);
      setExerciseDetails(exerciseDetailsData);
    };
    handleFetch();
  }, [id]);

  if (!exerciseDetails)
    return (
      <Box
        sx={{
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1">No Data Found</Typography>
      </Box>
    );
  return (
    <>
      <Details exerciseDetails={exerciseDetails} />
      <ExerciseVideo exerciseDetails={exerciseDetails} />
      <SimilarExercises exerciseDetails={exerciseDetails} />
    </>
  );
};

export default ExerciseDetails;
