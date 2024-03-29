import {trackPromise} from 'react-promise-tracker';
import {tokens} from './tokens.json';

const CLIENT_ID = tokens.songs.clientId;
const URL = 'https://accounts.spotify.com/api/token';
const cs = tokens.songs.codeSecret;
const encodedData = window.btoa(CLIENT_ID + ':' + cs);
const searchUrl = 'https://api.spotify.com/v1/search';
const popularPlaylistID = '37i9dQZF1DXcBWIGoYBM5M';
const popularPlaylisturl = `https://api.spotify.com/v1/playlists/${popularPlaylistID}?market=US&limit=20`;

//Gets access token  to Spotify (oAuth2)
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
    //get access token
    const token = await getToken();
    if (!token) {
      return [];
    }

    //encode spaces in search query to %20
    query.replace(/\s/g, '%20');

    //get songs from api
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

    //convert response to json
    const jsonResponse = await trackPromise(response.json());
    if (!jsonResponse.tracks) {
      return [];
    }

    return {
      totalResults: jsonResponse.tracks.total,
      offset: jsonResponse.tracks.offset / 20,
      //create an array with song objects
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
    const response = await trackPromise(
      fetch(popularPlaylisturl, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
    );
    const jsonResponse = await trackPromise(response.json());
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
