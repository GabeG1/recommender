import { trackPromise } from 'react-promise-tracker';

const API_KEY = '5a8ae4f1';
const URL = 'http://omdbapi.com/?type=movie&apikey=';
const CORS = 'https://cors-anywhere.herokuapp.com/';
const Movies = {
  searchMovies: async function (query, offset) {
    const response = await trackPromise(
      fetch(`${URL}${API_KEY}&s=${query}&page=${offset}`, {
        headers: {},
      })
    );
    const jsonResponse = await trackPromise(response.json());
    if (!jsonResponse.Search) {
      return [];
    }
    return {
      totalResults: jsonResponse.totalResults,
      movieList: jsonResponse.Search.map((movie) => {
        return {
          id: movie.imdbID,
          title: movie.Title,
          image: movie.Poster,
          year: movie.Year,
        };
      }),
    };
  },
};

export default Movies;
