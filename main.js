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


const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccddd
http://localhost:1234
`

//생성자방식
//const regexp = new RegExp('the', 'gi')
//리터럴방식
const regexp = /the/gi
console.log(str.match(regexp))

const regtest = /fox/gi
console.log(regtest.test(str))

const regrep = /fox/gi
console.log(str.replace(regrep, 'AAA'))

//\(escape): 이스케이프
//^ : 줄 시작에서 검색 (예) ^ab
//$ : 줄 끝에서 검색 (예) ab$
//m : 줄바꿈 기준으로 검색
console.log(str.match(/\.$/gim))

console.log(
    str.match(/./g)
)


console.log(
    str.match(/dog|fox/g)
)

console.log(
    str.match(/https?/g)
)

console.log(
    str.match(/d{2}/)
)

console.log(
    str.match(/[0-9]{1,}/)
)

console.log(
    str.match(/\b/g)
)

console.log(
    str.match(/(?<=@).{1,}/g)
)