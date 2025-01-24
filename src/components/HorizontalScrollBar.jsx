import { Box } from "@mui/material";
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import BodyPart from "./BodyPart";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import All from "../assets/icons/All.png";
import Arms from "../assets/icons/arms.png";
import Back from "../assets/icons/back.png";
import Chest from "../assets/icons/chest.png";
import LowerLegs from "../assets/icons/LowerLegs.png";
import UpperLegs from "../assets/icons/upperLegs.png";
import Neck from "../assets/icons/neck.png";
import Shoulder from "../assets/icons/shoulder.png";
import Waist from "../assets/icons/waist.png";
import Cardio from "../assets/icons/cardio.png";
import ExerciseCard from "./ExerciseCard";
import { onWheel } from "../utils/onWheelScroll";
import Loader from "./Loader";

import usePreventBodyScroll from "../hooks/usePreventBodyScroll";
const HorizonalScrollBar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  let bodyPartData = [];

  {
    if (bodyParts) {
      bodyPartData = [
        {
          icon: All,
          name: data[0],
        },
        {
          icon: Back,
          name: data[1],
        },
        {
          icon: Cardio,
          name: data[2],
        },
        {
          icon: Chest,
          name: data[3],
        },
        {
          icon: Arms,
          name: data[4],
        },
        {
          icon: LowerLegs,
          name: data[4],
        },
        {
          icon: Neck,
          name: data[5],
        },
        {
          icon: Shoulder,
          name: data[6],
        },
        {
          icon: Arms,
          name: data[7],
        },
        {
          icon: UpperLegs,
          name: data[8],
        },
        {
          icon: Waist,
          name: data[9],
        },
      ];
    }
  }
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
      <KeyboardArrowLeftIcon
        sx={{
          backgroundColor: "#e6e6e6",
          borderRadius: "50%",
          fontSize: { xs: "3rem" },
        }}
        onClick={() => scrollPrev()}
        className="right-arrow"
      />
    );
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
      <KeyboardArrowRightIcon
        sx={{
          backgroundColor: "#e6e6e6",
          borderRadius: "50%",
          fontSize: { xs: "3rem" },
        }}
        onClick={() => scrollNext()}
        className="left-arrow"
      />
    );
  };

  if (!data?.length) return <Loader />;
  return (
    <Box onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onWheel={onWheel}
      >
        {bodyParts
          ? bodyPartData.map((item, id) => (
              <Box key={id}>
                <BodyPart
                  data={item}
                  setBodyPart={setBodyPart}
                  bodyPart={bodyPart}
                />
              </Box>
            ))
          : data.map((item, id) => (
              <Box key={id}>
                <ExerciseCard exercise={item} />
              </Box>
            ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizonalScrollBar;
