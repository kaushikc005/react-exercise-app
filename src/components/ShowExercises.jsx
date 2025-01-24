import { Box, Typography, Stack, Pagination } from "@mui/material";
import { useEffect } from "react";
import { fetchfromAPI } from "../utils/fetchfromAPI";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";
import { useState } from "react";

const ShowExercises = ({ exercises, setExercises, bodyPart }) => {
  const exercisesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];
      if (bodyPart === "all") {
        exerciseData = await fetchfromAPI("");
      } else {
        exerciseData = await fetchfromAPI(`bodyPart/${bodyPart}`);
      }
      setExercises(exerciseData);
    };
    fetchExerciseData();
  }, [bodyPart]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentPageExercise = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  if (!currentPageExercise?.length) return <Loader />;
  return (
    <Box
      id="exercise"
      sx={{
        padding: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: { xs: "center", md: "unset" },
          fontSize: { xs: "3rem", md: "4rem" },
          fontWeight: { xs: 500, md: 600 },
        }}
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          gap: "3rem",
          flexWrap: "wrap",
          marginTop: "1rem",
          justifyContent: "center",
          padding: { md: "5rem" },
          margin: { md: "auto" },
        }}
      >
        {currentPageExercise.map((data, key) => (
          <ExerciseCard exercise={data} key={key} />
        ))}
      </Stack>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <Pagination
          onChange={handlePageChange}
          defaultPage={1}
          page={currentPage}
          count={Math.ceil(exercises?.length / exercisesPerPage)}
          color="primary"
          shape="rounded"
        />
      </Box>
    </Box>
  );
};

export default ShowExercises;
