import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import SearchExercise from "../components/SearchExercise";
import ShowExercises from "../components/ShowExercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <>
      <HeroSection />
      <SearchExercise
        setExercises={setExercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
      <ShowExercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </>
  );
};

export default Home;
