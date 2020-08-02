import {trackPromise} from 'react-promise-tracker';

const API_KEY = '1d708eee4a07873959932761d08189e4';
const BaseURL = 'https://api.themoviedb.org/3';
const searchURL = `${BaseURL}/search/movie`;
const trendingURL = `${BaseURL}/trending/movie/week`;
const apiParam = `api_key=${API_KEY}`;

const Movies = {
  searchMovies: async function (query, offset) {
    //get movies from api
    const response = await trackPromise(
      fetch(
        `${searchURL}?${apiParam}&query=${query}&page=${offset}&include_adult=true`,
        {
          headers: {},
        }
      )
    );

    //convert response to json
    const jsonResponse = await trackPromise(response.json());

    //if no results in response, return empty array
    if (!jsonResponse.results) {
      return [];
    }
    return {
      totalResults: jsonResponse.total_results,
      //create array with movie objects
      movieList: jsonResponse.results.map((movie) => {
        return {
          id: movie.id,
          title: movie.original_title,
          image: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          year: movie.release_date,
          description: movie.overview,
        };
      }),
    };
  },
  getTrendingMovies: async function () {
    const response = await trackPromise(
      fetch(`${trendingURL}?${apiParam}`, {
        headers: {},
      })
    );
    const jsonResponse = await trackPromise(response.json());

    if (!jsonResponse.results) {
      return [];
    }

    return jsonResponse.results.map((movie) => {
      return {
        id: movie.id,
        title: movie.original_title,
        image: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        year: movie.release_date,
        description: movie.overview,
      };
    });
  },
};

export default Movies;
