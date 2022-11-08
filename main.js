import axios from 'axios'

function fetchMovies() {
    axios.get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then((response) => {
        console.log(response)
        const h1El = document.querySelector('h1')
        const imgEl = document.querySelector('img')
        h1El.textContent = response.data.Search[0].Title
        imgEl.src = response.data.Search[0].Poster
    })
}

fetchMovies()