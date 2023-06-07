import axios from "axios";

const BASE_URL = "https://exercisedb.p.rapidapi.com/exercises";
const options = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY_EXERCISEDB,
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
