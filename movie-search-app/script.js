const apiKey = "28dddab8";
const searchInput = document.getElementById("searchInput");
const submit = document.getElementById("searchButton");
const moviesContainer = document.getElementById("movies");

submit.addEventListener("click", async () => {
  const searchTerm = searchInput.value;
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Search) {
      displayMovies(data.Search);
    } else {
      moviesContainer.innerHTML = `<p>No movies found!</p>`;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

function displayMovies(movies) {
  moviesContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    const poster =
      movie.Poster === "N/A"
        ? "https://via.placeholder.com/300x450"
        : movie.Poster;

    movieCard.innerHTML = `
      <img src="${poster}" alt="${movie.Title}" />
      <div class="movie-info">
        <h3 class="movie-title">${movie.Title}</h3>
        <p class="movie-year">${movie.Year}</p>
        <button class="button-more-info" data-id="${movie.imdbID}" onclick="showMovieDetails('${movie.imdbID}')">More Info</button>
      </div>
    `;

    moviesContainer.append(movieCard);
  });
}

// Add event listeners to all "More Info" buttons
const moreInfoButtons = document.querySelectorAll(".button-more-info");
  moreInfoButtons.forEach((button) => {
    button.addEventListener("click", async (e) => {
      const movieId = e.target.getAttribute("data-id");
      await showMovieDetails(movieId);
    })
  });


async function showMovieDetails(movieId) {
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Populate modal with movie details
    document.getElementById("modalPoster").src =
      data.Poster === "N/A"
        ? "https://via.placeholder.com/300x450"
        : data.Poster;
    document.getElementById("modalTitle").innerText = data.Title;
    document.getElementById("modalYear").innerText = `Year: ${data.Year}`;
    document.getElementById("modalGenre").innerText = `Genre: ${data.Genre}`;
    document.getElementById("modalPlot").innerText = `Plot: ${data.Plot}`;

    // Show the modal
    const modal = document.getElementById("myModal");
    modal.style.display = "flex";
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}

// Close modal when the user clicks the close button or anywhere outside the modal
document.querySelector(".close").onclick = function () {
  document.getElementById("myModal").style.display = "none";
};

window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
