import axios from "axios";

const BASE_URL = "https://youtube-search-and-download.p.rapidapi.com";
const options = {
  headers: {
    "X-RapidAPI-Key": "40747a52e2msh942db19fc6a2ea3p1ed9dbjsn9ffe3888e0a9",
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
