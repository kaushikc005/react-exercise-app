import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HorizonalScrollBar from "./HorizontalScrollBar";
import { fetchfromAPI } from "../utils/fetchfromAPI";

const SearchExercise = ({ setBodyPart, setExercises, bodyPart }) => {
  const [searchText, setSearchText] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchfromAPI("bodyPartList");
      setBodyParts(["all", ...data]);
    };
    fetchData();

  }, []);

  const handleSearch = async () => {
    if (searchText) {
      const exerciseData = await fetchfromAPI("");
      const filteredExerciseData = exerciseData.filter(
        (data) =>
          data.name.includes(searchText.toLowerCase()) ||
          data.bodyPart.includes(searchText.toLowerCase()) ||
          data.equipment.includes(searchText.toLowerCase()) ||
          data.target.includes(searchText.toLowerCase())
      );

      setExercises(filteredExerciseData);
      setSearchText("");
      window.scrollTo({
        top: 1700,
        left: 100,
        behavior: "smooth",
      });
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleSearch();
  };
  return (
    <Box
      id="search"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3rem",
        marginTop: { xs: "6rem" },
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "2rem", md: "4rem" },
            textAlign: "center",
            lineHeight: { xs: "2.5rem", md: "5rem" },
            marginTop: { xs: "2rem", md: "0" },
          }}
        >
          Awesome Exercises You <br /> Should Know
        </Typography>

        <FormControl
          className="searchBar"
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <TextField
            type="text"
            placeholder="Search Exercies"
            className="searchBarInput"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            sx={{
              backgroundColor: "#FF2625",
              color: "#fff",
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              width: "10rem",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#fff",
                color: "#FF2625",
              },
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </FormControl>
      </Box>
      <Box></Box>
      <Box sx={{ width: "90vw" }}>
        <HorizonalScrollBar
          data={bodyParts}
          bodyParts
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Box>
  );
};

export default SearchExercise;
