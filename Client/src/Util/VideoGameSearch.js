const API_KEY = '15895c76bfcb812597f75d6d72e27d0e01ca5bb0';
const URL = 'https://www.giantbomb.com/api/games/?api_key=';
const CORS = 'https://cors-anywhere.herokuapp.com/';

const VideoGames = {
  searchVideoGames: async function (query) {
    console.log('here');
    const response = await fetch(
      `${CORS}${URL}${API_KEY}&format=json&filter=name:${query}&limit=20`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    console.log(response);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    if (!jsonResponse.results) {
      return [];
    }
    return jsonResponse.results.map((game) => {
      console.log(game);
      return {
        id: game.id,
        name: game.name,
        image: game.image.original_url,
        description: game.deck,
      };
    });
  },
};

export default VideoGames;
