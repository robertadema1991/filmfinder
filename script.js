
    function addMoviesToDom(movies) {
        const filterList = document.getElementById("filter-list");
    
        const listItems = movies.map((movie) => {
            let listItem = document.createElement("li");
    
            let image = document.createElement("img");
            image.src = movie.poster;

            let link = document.createElement("a");
            link.href = "https://www.imdb.com/title/" + movie.imdbID;
            link.target = "_blank";

            listItem.appendChild(link);
            link.appendChild(image);
    
            return listItem;
        });
    
        listItems.forEach((listItem) => {
            filterList.appendChild(listItem);
        });
    }

function removeMoviesFromDOM() {
    const currentListedMovies = document.getElementById("navigation-list");

    while (currentListedMovies.hasChildNodes()) {
        currentListedMovies.removeChild(currentListedMovies.firstChild);
        console.log("All current listed movies are removed");
    };
}

addMoviesToDom(movies);

function removeMoviesFromDOM() {
    const currentListedMovies = document.getElementById("filter-list");

    while (currentListedMovies.hasChildNodes()) {
        currentListedMovies.removeChild(currentListedMovies.firstChild);
        console.log("All current listed movies are removed");
    };
}


function addEventListeners() {
    const radioButtons = document.getElementsByName("film-filter");

    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener("change", handleOnChangeEvent);
    });
}


function filterMovies(wordInMovie) {
    removeMoviesFromDOM();

    const filterMovies = movies
        .filter((movie) => {
            return movie.title.includes(wordInMovie);
        });

    addMoviesToDom(filterMovies);
}

function filterLatestMovies() {
    removeMoviesFromDOM();

    const filterMoviesYear = movies
        .filter((movie) => {
            return movie.year >= 2014;
        });

    addMoviesToDom(filterMoviesYear);

    // console.log("Movies from 2014 and newer:", filterMoviesYear);
}


function handleOnChangeEvent(event) {
    switch (event.target.value) {
        case "lastmovies":
            // console.log("hey i am last movies film");
            filterLatestMovies();
            break;
        case "avenger":
            // console.log("hey i am the avenger film");
            filterMovies("Avenger");
            break;
        case "xmen":
            // console.log("hey i am the x-men film");
            filterMovies("X-Men");
            break;
        case "princess":
            // console.log("hey i am the princess film");
            filterMovies("Princess");
            break;
        case "batman":
            // console.log("hey i am the batman film");
            filterMovies("Batman");
            break;
        default:
            console.log("Onbekende film");
            break;
    }
};

addEventListeners()

const btn = document.getElementByClass("button");

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = 'salmon';
  btn.style.color = 'white';
});



