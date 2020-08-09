import {trackPromise} from 'react-promise-tracker';
import {tokens} from './tokens.json';

const URL = 'https://rawg-video-games-database.p.rapidapi.com/games';

const VideoGames = {
  searchVideoGames: async function (query, offset) {
    //get video games from api
    const response = await trackPromise(
      fetch(
        `${URL}filter=name:${query}&limit=20&offset=${
          offset * 20
        }`,
        {
          headers:  {
            "x-rapidapi-host": tokens.games.x_rapidapi_host,
            "x-rapidapi-key": tokens.games.x_rapidapi_key
          }
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
