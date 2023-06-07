import { Box, Stack, Typography } from "@mui/material";
import HorizonalScrollBar from "./HorizontalScrollBar";
import { useEffect, useState } from "react";
import { fetchfromAPI } from "../utils/fetchfromAPI";
import Loader from "./Loader";
const SimilarExercises = ({ exerciseDetails }) => {
  const [targetExercise, setTargetExercise] = useState([]);
  const [equipmentExercise, setEquipmentExercise] = useState([]);

  useEffect(() => {
    const handlefetchExercises = async () => {
      if (exerciseDetails?.target && exerciseDetails?.equipment) {
        const targetData = await fetchfromAPI(
          `target/${exerciseDetails?.target} `
        );
        setTargetExercise(targetData);
        const equipmentData = await fetchfromAPI(
          `equipment/${exerciseDetails?.equipment} `
        );
        setEquipmentExercise(equipmentData);

      }
    };
    handlefetchExercises();
  }, [exerciseDetails]);

  return (
    <Box id="exercise" sx={{ marginBlock: "4rem" }} textTransform="capitalize">
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          textAlign: "center",
          marginBlock: "2rem",
        }}
      >
        Exercises targeting the similar muscles group:
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            textAlign: "center",
            color: "#FF2625",
            fontWeight: 600,
          }}
        >
          {equipmentExercise[0]?.target}
        </Typography>
      </Typography>
      <Stack id="target">
        {targetExercise ? (
          <HorizonalScrollBar data={targetExercise} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          textAlign: "center",
          marginTop: "6rem",
          marginBottom: "2rem",
        }}
      >
        Exercises using similar equipment :
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            textAlign: "center",
            color: "#FF2625",
            fontWeight: 600,
          }}
        >
          {equipmentExercise[0]?.equipment}
        </Typography>
      </Typography>
      <Stack id="equipment">
        {equipmentExercise.length > 0 ? (
          <HorizonalScrollBar data={equipmentExercise} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
