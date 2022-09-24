import "./component/navigation.js";
import "./data/movies.js";
import "./component/movie-item.js";
import "./component/footer.js";
import showMovies from "./component/movie-item.js";

const baseUrl = "https://api.themoviedb.org/3";
const API_Key = "api_key=ef6bb4c6b0e507504c0047a5b119f339";
const Search_Url = `${baseUrl}/search/movie?${API_Key}&language=en-US&query=`;

const main = () => {
  const form = document.getElementById("form");

  async function fetchSearchResult(query) {
    let result = await fetch(`${Search_Url}${query}`);
    let data = await result.json();

    return data;
  }

  const submitValue = (e) => {
    return document.querySelector("#search").value;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let { results } = await fetchSearchResult(submitValue(e));
    showMovies(results);
    // console.log(results);
  });
};

export default main;
