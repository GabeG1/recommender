import { trackPromise } from 'react-promise-tracker';

const CLIENT_ID = '0257e913a3d44ce9b0535e868949fd21';
const URL = 'https://accounts.spotify.com/api/token';
const CORS = 'https://cors-anywhere.herokuapp.com/';
const cs = '96a0cfebacfa4ad3a5757db18d09fac1';
const encodedData = window.btoa(CLIENT_ID + ':' + cs);
const searchUrl = 'https://api.spotify.com/v1/search';
const popularPlaylistID = '37i9dQZF1DXcBWIGoYBM5M';
const fields =
  'items(track(name%2C%20id%2C%20artists(name)%2C%20album(name%2C%20images(url)%2C%20release_date)))&limit=20';
const popularPlaylisturl = `https://api.spotify.com/v1/playlists/${popularPlaylistID}?market=US&limit=20`;
const tempURL =
  'https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M?market=ES&fields=items(track(name%2C%20id%2C%20artists(name)%2C%20album(name%2C%20images(url)%2C%20release_date)))';

async function getToken() {
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
  return jsonResponse.access_token;
}

const Songs = {
  searchSongs: async function (query, offset) {
    const token = await getToken();
    if (!token) {
      return [];
    }
    query.replace(/\s/g, '%20');
    const response = await trackPromise(
      fetch(
        `${searchUrl}?q=${query}&type=track&offset=${Number(offset * 20)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );
    const jsonResponse = await trackPromise(response.json());
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
  getPopularSongs: async function () {
    console.log('calling token...');
    const token = await getToken();
    if (!token) {
      return [];
    }
    console.log(token);
    const response = await fetch(popularPlaylisturl, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const jsonResponse = await response.json();
    if (!jsonResponse.tracks) {
      console.log('no response');
      return [];
    }
    const results = await jsonResponse.tracks.items.map((track) => {
      return {
        id: track.track.id,
        album: track.track.album.name,
        title: track.track.name,
        image: track.track.album.images[1].url,
        artist: track.track.artists[0].name,
        releaseDate: track.track.album.release_date,
      };
    });
    return results;
  },
};

export default Songs;
