import showMovies from "../component/movie-item";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const API_Key = "api_key=ef6bb4c6b0e507504c0047a5b119f339";
const API_Url = `${baseUrl}/discover/movie?sort_by=popularity.desc&${API_Key}`;

const getMovies = (url) => {
  axios.get(API_Url).then((response) => {
    url = response.data.results;
    // console.log(url);
    showMovies(url);
  });
};

export default getMovies(API_Url);
