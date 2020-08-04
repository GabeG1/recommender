import {trackPromise} from 'react-promise-tracker';
import {tokens} from './tokens.json';

const API_KEY = tokens.shows;
const BaseURL = 'https://api.themoviedb.org/3';
const searchURL = `${BaseURL}/search/tv`;
const trendingURL = `${BaseURL}/trending/tv/week`;
const apiParam = `api_key=${API_KEY}`;

const Shows = {
  searchShows: async function (query, offset) {
    //get shows from api
    const response = await trackPromise(
      fetch(
        `${searchURL}?${apiParam}&query=${query}&page=${offset}&include_adult=true`,
        {
          headers: {},
        }
      )
    );

    //convert response from website to json
    const jsonResponse = await trackPromise(response.json());

    //if no results, return empty array
    if (!jsonResponse.results) {
      return [];
    }
    return {
      totalResults: jsonResponse.total_results,
      //create an array with show objects
      showList: jsonResponse.results.map((show) => {
        return {
          id: show.id,
          title: show.name,
          image: `https://image.tmdb.org/t/p/original${show.poster_path}`,
          year: show.release_date,
          description: show.overview,
        };
      }),
    };
  },
  getTrendingShows: async function () {
    const response = await trackPromise(
      fetch(`${trendingURL}?${apiParam}`, {
        headers: {},
      })
    );
    const jsonResponse = await trackPromise(response.json());

    if (!jsonResponse.results) {
      return [];
    }

    return jsonResponse.results.map((show) => {
      return {
        id: show.id,
        title: show.name,
        image: `https://image.tmdb.org/t/p/original${show.poster_path}`,
        year: show.release_date,
        description: show.overview,
      };
    });
  },
};

export default Shows;
