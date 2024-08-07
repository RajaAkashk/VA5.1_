const movies =[
  {id:1, title:"Movie 1", genre:"action"},
  {id:2, title:"Movie 2", genre:"comedy"},
  {id:3, title:"Movie 3", genre:"drama"},
  {id:4, title:"Movie 4", genre:"action"},
  {id:5, title:"Movie 5", genre:"comedy"},
]

const movieListContainer = document.querySelector('#movieList')
const filterRadioButtons = document.getElementsByName('genre');

function renderMovies (selectedGenre) {

  const filteredMovies = selectedGenre === "all" ? movies : movies.filter(movie => movie.genre === selectedGenre)
  
const movieListHtml = filteredMovies.map(movie => `
<li>
<strong>ID: </strong>${movie.id}<br>
<strong>Title: </strong>${movie.title}<br>
<strong>Genre: </strong>${movie.genre}<br>
</li>
<hr>
`)
movieListContainer.innerHTML = movieListHtml.join("")
}

renderMovies ("all")

filterRadioButtons.forEach(radioBtn => {
  radioBtn.addEventListener('change', function(){
    renderMovies(this.value);
  })
})

