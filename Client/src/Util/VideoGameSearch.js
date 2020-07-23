import { trackPromise } from 'react-promise-tracker';

const API_KEY = '15895c76bfcb812597f75d6d72e27d0e01ca5bb0';
const URL = 'https://www.giantbomb.com/api/games/?api_key=';
const CORS = 'https://cors-anywhere.herokuapp.com/';

const VideoGames = {
  searchVideoGames: async function (query, offset) {
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
    const jsonResponse = await trackPromise(response.json());
    if (!jsonResponse.results) {
      return [];
    }
    return {
      totalResults: jsonResponse.number_of_total_results,
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
