import { trackPromise } from 'react-promise-tracker';

const CLIENT_ID = '0257e913a3d44ce9b0535e868949fd21';
const URL = 'https://accounts.spotify.com/api/token';
const CORS = 'https://cors-anywhere.herokuapp.com/';
const cs = '96a0cfebacfa4ad3a5757db18d09fac1';
var encodedData = window.btoa(CLIENT_ID + ':' + cs);
const searchUrl = 'https://api.spotify.com/v1/search';

const Songs = {
  searchSongs: async function (query, offset) {
    let response = await trackPromise(
      fetch(`${URL}`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${encodedData}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
      })
    );
    let jsonResponse = await trackPromise(response.json());
    const token = jsonResponse.access_token;
    if (!token) {
      return [];
    }
    query.replace(/\s/g, '%20');
    response = await trackPromise(
      fetch(
        `${searchUrl}?q=${query}&type=track&offset=${Number(offset * 20)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );
    jsonResponse = await trackPromise(response.json());
    if (!jsonResponse.tracks) {
      return [];
    }
    return {
      totalResults: jsonResponse.tracks.total,
      offset: jsonResponse.tracks.offset / 20,
      trackList: jsonResponse.tracks.items.map((track) => {
        return {
          id: track.id,
          album: track.album.name,
          title: track.name,
          image: track.album.images[1].url,
          artist: track.artists[0].name,
          releaseDate: track.album.release_date,
        };
      }),
    };
  },
};

export default Songs;
