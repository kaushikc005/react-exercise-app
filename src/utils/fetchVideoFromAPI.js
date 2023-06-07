import axios from "axios";

const BASE_URL = "https://youtube-search-and-download.p.rapidapi.com";
const options = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY_YOUTUBE,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchVideoFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error(error);
  }
};
