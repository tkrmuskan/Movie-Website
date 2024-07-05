document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const movieContainer = document.querySelector('.movie-container'); 
    const inputBox = document.querySelector('.inputBox'); 
    const searchPopup = document.getElementById('searchPopup');

    const getMovieInfo = async (movie) => {
        const myAPIKey = "6888403a";
        const url = `http://www.omdbapi.com/?apikey=${myAPIKey}&t=${movie}`; 
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.Response === "True") {
                showMovieData(data);
            } else {
                movieContainer.innerHTML = `<p class="error">Movie not found!</p>`;
            }
        } catch (error) {
            movieContainer.innerHTML = `<p class="error">Error fetching data. Please try again later.</p>`;
        }
    }

    const showMovieData = (data) => {
        movieContainer.innerHTML = "";

        const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster } = data;

        const movieElement = document.createElement("div");
        movieElement.classList.add('movie-info');
        movieElement.innerHTML = `<h2>${Title}</h2>
                                  <p><strong>Rating: &#11088;</strong> ${imdbRating}</p>
                                  <p><strong>Genres:</strong></p>`;

        const movieGenreElement = document.createElement("div");
        movieGenreElement.classList.add("movie-genre");

        Genre.split(",").forEach(element => {
            const p = document.createElement('p');
            p.innerText = element.trim();
            movieGenreElement.appendChild(p);
        });

        movieElement.appendChild(movieGenreElement);
        movieElement.innerHTML += `<p><strong>Released Date:</strong> ${Released}</p>
                                   <p><strong>Duration:</strong> ${Runtime}</p>
                                   <p><strong>Cast:</strong> ${Actors}</p>
                                   <p><strong>Plot:</strong> ${Plot}</p>`;

        const moviePosterElement = document.createElement('div');
        moviePosterElement.classList.add('movie-poster');
        moviePosterElement.innerHTML = `<img src="${Poster}" alt="Poster of ${Title}"/>`;

        movieContainer.appendChild(moviePosterElement);
        movieContainer.appendChild(movieElement);
    }

    // Adding event listener
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const movieName = inputBox.value.trim(); 
        if (movieName !== "") {
            getMovieInfo(movieName);
            searchPopup.style.display = 'none'; // Hide the search popup
        } else {
            movieContainer.innerHTML = `<p class="error">Please enter a movie name.</p>`;
        }
    });

    // Event listeners to open and close the search popup
    // const searchIcon = document.getElementById('searchIcon');
    // const closeSearchPopup = document.getElementById('closeSearchPopup');

    // searchIcon.addEventListener('click', () => {
    //     searchPopup.style.display = 'block';
    // });

    // closeSearchPopup.addEventListener('click', () => {
    //     searchPopup.style.display = 'none';
    // });
});
