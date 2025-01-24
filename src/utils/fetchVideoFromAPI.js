import axios from "axios";

const BASE_URL = "https://youtube-search-and-download.p.rapidapi.com";
const options = {
  headers: {
    "X-RapidAPI-Key": "85a02d2badmshffac682784db2d3p11dec6jsn71ffdc942e01",
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
