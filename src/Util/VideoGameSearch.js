const API_KEY = '15895c76bfcb812597f75d6d72e27d0e01ca5bb0';
const URL = "https://www.giantbomb.com/api/games/?api_key=";

const VideoGames = {
    searchVideoGames: async function (query) {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${URL}${API_KEY}&format=json&filter=name:${query}&limit=20`, {
        headers: {
          
        }
    } 
    );
    const jsonResponse = await response.json();
    if(!jsonResponse.results) {
        return [];
    }
    return jsonResponse.results.map(game => {
    return { 
        
        id: game.id,
        name: game.name,
        image: game.image.original_url,
        description: game.deck
        
    }

});
}
}

export default VideoGames;