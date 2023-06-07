import axios from "axios";

const BASE_URL = "https://exercisedb.p.rapidapi.com/exercises";
const options = {
  headers: {
    "X-RapidAPI-Key": "3d9d3cba2fmshe16ac3a6f626f2dp1b1b41jsn856e383828e1",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchfromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error(error);
  }
};
