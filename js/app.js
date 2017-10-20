var request = superagent

const movieTitle = document.querySelector('.movie-title mark')
const castMovie = document.querySelector('.cast-count mark')

var apiKey = '8895eadbfb4ea232621e9e17985e5467'

request
  .get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey)
  .then(function(dates){
    let movie = dates.body.results[1].original_title
    let movieId = dates.body.results[1].id
    movieTitle.innerHTML = movie

    return movieId

  })
  .then(function (id){
    request
      .get('https://api.themoviedb.org/3/movie/'+id+'/credits?api_key='+apiKey)
      .then(function(data){
        var cast = data.body.cast.length
        //console.log(cast);
        castMovie.innerHTML = cast
      })
  })
