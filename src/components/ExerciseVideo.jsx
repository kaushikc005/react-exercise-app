import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { fetchVideoFromAPI } from "../utils/fetchVideoFromAPI";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import demoThumbnail from "../assets/images/banner1.jpg";
import Loader from "./Loader";
import { onWheel } from "../utils/onWheelScroll";
import usePreventBodyScroll from "../hooks/usePreventBodyScroll";
const ExerciseVideo = ({ exerciseDetails }) => {
  const [exerciseVideos, setExerciseVideos] = useState([]);
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

  useEffect(() => {
    const handleVideoFetch = async () => {
      const videoData = await fetchVideoFromAPI(
        `search?query=${exerciseDetails?.name} exercise`
      );
      setExerciseVideos(videoData?.contents);
    };
    handleVideoFetch();
  }, [exerciseDetails]);

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
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  if (!exerciseDetails) return <Loader />;
  return (
    <Box
      sx={{
        display: "flex",
        width: { xs: "100vw", md: "unset" },

        flexDirection: "column",
        alignItems: { xs: "center" },
        gap: "1rem",
        padding: { md: "4rem" },
        textTransform: "capitalize",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          textAlign: "center",
          marginBottom: "1rem",
          p: { xs: "1rem", md: "unset" },
        }}
      >
        Watch{" "}
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: "2rem", md: "3.2rem" },
            fontWeight: 700,
            color: "#FF2625",
          }}
        >
          {exerciseDetails.name}
        </Typography>{" "}
        Exercises on Youtube
      </Typography>
      <Box onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          onWheel={onWheel}
          style={{ alignSelf: "center" }}
        >
          {exerciseVideos.map((data, key) => (
            <Link
              to={`https://www.youtube.com/watch?v=${data?.video?.videoId}`}
              key={key}
              target="_blank"
            >
              <Card
                sx={{
                  width: { xs: "90vw", sm: "358px", md: "360px" },
                  height: { xs: "40vh", md: "350px" },
                  maxHeight: { xs: "40vh", md: "350px" },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#ccc0c0",
                  boxShadow: "none",
                  borderRadius: "8px",
                  border: 0,
                  margin: { xs: "0rem 1.25rem", md: "0rem 1rem" },
                }}
              >
                <CardMedia
                  image={data?.video?.thumbnails[1]?.url || demoThumbnail}
                  sx={{
                    width: { xs: "100%" },
                    minHeight: { xs: 220, md: 230 },
                  }}
                />
                <CardContent sx={{ alignSelf: "flex-start" }}>
                  <Typography variant="subtitle1" sx={{fontSize:{xs:"1rem",md:"1.25rem"} ,fontWeight: "bold" }}>
                    {data?.video?.title.slice(0, 50)}
                  </Typography>
                  <Typography variant="subtitle1" sx={{fontSize:{xs:"0.75rem",md:"1rem"} , fontWeight: "bold" }}>
                    {data?.video?.channelName}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </ScrollMenu>
      </Box>
    </Box>
  );
};

export default ExerciseVideo;
