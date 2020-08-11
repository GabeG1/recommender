import {trackPromise} from 'react-promise-tracker';
import {tokens} from './tokens.json';

const URL = 'https://rawg-video-games-database.p.rapidapi.com/games';

const VideoGames = {
  searchVideoGames: async function (query, offset) {
    //get video games from api
    console.log(tokens);
    const response = await trackPromise(
      fetch(
        `${URL}?search=${query}&page_size=20&page=${
          offset+1}`,
        {
          headers:  {
            "x-rapidapi-host": tokens.games.x_rapidapi_host,
            "x-rapidapi-key": tokens.games.x_rapidapi_key
          }
        }
      )
    );
console.log(response);
    //convert response to json
    const jsonResponse = await trackPromise(response.json());
    if (!jsonResponse.results) {
      return [];
    }
    return {
      totalResults: jsonResponse.count,
      //create video game array
      gameList: jsonResponse.results.map((game) => {
        return {
          id: game.id,
          name: game.name,
          image: game.background_image,
          description: game.released,
        };
      }),
    };
  },
};

export default VideoGames;
