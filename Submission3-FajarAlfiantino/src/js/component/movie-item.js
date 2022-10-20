const IMG_Url = "https://image.tmdb.org/t/p/w1280/";

const moviesElement = document.getElementById("layout");

const showMovies = (data) => {
  moviesElement.innerHTML = "";

  data.forEach((movie) => {
    const { title, poster_path, overview, vote_average, release_date, id } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("col-sm-12");
    movieElement.classList.add("col-md-6");
    movieElement.classList.add("col-lg-4");
    movieElement.classList.add("col-xl-3");
    movieElement.innerHTML = 
          `
            <div class="card mt-4">
              <img src="${IMG_Url + poster_path}" class="card-img-top w-100" alt="${title}">
              <div class="card-body">
                <h3>${title}</h3>
                <p class="card-text">Rating: <span class="${getColor(vote_average)}">${vote_average}</span></p>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#m${id}">
                  Overview
                </button>
                    
                <!-- Modal -->
                <div class="modal fade" id="m${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Overview</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <h3>${title}</h3>
                        <p class="card-text">${release_date}</p>
                        <p class="card-text">Rating: <span class="${getColor(
                          vote_average
                        )}">${vote_average}</span></p>
                        <p>${overview}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;

    moviesElement.appendChild(movieElement);
  });
};

const getColor = (vote) => {
  if (vote >= 8) {
    return "text-success";
  } else if (vote >= 5) {
    return "text-warning";
  } else {
    return "text.danger";
  }
};

export default showMovies;
