import {trackPromise} from 'react-promise-tracker';
import {tokens} from './tokens.json';

const API_KEY = tokens.games;
const URL = 'https://www.giantbomb.com/api/games/?api_key=';
const CORS = 'https://cors-anywhere.herokuapp.com/';

const VideoGames = {
  searchVideoGames: async function (query, offset) {
    //get video games from api
    const response = await trackPromise(
      fetch(
        `${CORS}${URL}${API_KEY}&format=json&filter=name:${query}&limit=20&offset=${
          offset * 20
        }`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
    );

    //convert response to json
    const jsonResponse = await trackPromise(response.json());
    if (!jsonResponse.results) {
      return [];
    }
    return {
      totalResults: jsonResponse.number_of_total_results,
      //create video game array
      gameList: jsonResponse.results.map((game) => {
        return {
          id: game.id,
          name: game.name,
          image: game.image.original_url,
          description: game.deck,
        };
      }),
    };
  },
};

export default VideoGames;
