const CLIENT_ID = '0257e913a3d44ce9b0535e868949fd21';
const URL = "https://accounts.spotify.com/api/token";
const CORS = "https://cors-anywhere.herokuapp.com/";
const cs = '96a0cfebacfa4ad3a5757db18d09fac1'
var encodedData = window.btoa(CLIENT_ID + ':' + cs);
const searchUrl="https://api.spotify.com/v1/search";

const Songs = {
    searchSongs: async function (query) {

    let response = await fetch(`${URL}`, {
        method: 'POST',
        headers: {
        'Authorization': `Basic ${encodedData}`,
        'Content-Type': "application/x-www-form-urlencoded",
        },
        body: 'grant_type=client_credentials'
    } 
    );
    let jsonResponse = await response.json();
    const token = jsonResponse.access_token;
    console.log(token);
    if(!token) {
        return [];
    }
    query.replace(/\s/g, "%20");
    console.log(`${searchUrl}?q=${query}&type=track`);
    response = await fetch(`${searchUrl}?q=${query}&type=track`, {
        headers: {
        'Authorization': `Bearer ${token}`
        }
    })
    console.log(response);
    jsonResponse = await response.json();
    console.log(jsonResponse);
    if(!jsonResponse) {
        return [];
    }
    return (
        jsonResponse.tracks.items.map(track=> {
         return {
        id: track.id,
        album: track.album.name,
        title: track.name,
        image: track.album.images[1].url,
        artist: track.artists[0].name,
        releaseDate: track.album.release_date
         }

        })
    )
    

    }
}

export default Songs;