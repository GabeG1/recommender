const API_KEY = '5a8ae4f1';
const URL = 'http://omdbapi.com/?type=movie&apikey=';
const CORS = 'https://cors-anywhere.herokuapp.com/';
const Movies = {
  searchMovies: async function (query) {
    const response = await fetch(`${URL}${API_KEY}&s=${query}`, {
      headers: {},
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    //console.log(jsonResponse.Search[0].Title);
    if (!jsonResponse.Search) {
      console.log('here');
      return [];
    }
    return jsonResponse.Search.map((movie) => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        image: movie.Poster,
        year: movie.Year,
      };
    });
  },
};

export default Movies;
