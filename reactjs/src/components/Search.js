//* Search page

import { useState, useEffect } from "react";
// Custom hook
import useAuth from "../hooks/useAuth";

// Spotify Web API Node third party library/package
// Can be used in React as well as Node.js
import SpotifyWebApi from "spotify-web-api-node";

// Environment variable from .env file
// Spotify Client ID
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
});

const Search = ({ code }) => {
  // Get the access token from useAuth custom hook
  const accessToken = useAuth(code);

  //* useState hooks
  // For search queries
  const [search, setSearch] = useState("");
  // For array of search queries results objects
  const [searchResults, setSearchResults] = useState([]);
  // View array of returned search results
  console.log(searchResults);

  //* useEffect hooks
  // If no access token, then return nothing
  // Otherwise set the access token to use search query
  // Run when access token changes
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // If no search query is present, return empty array
  // If no access token is present, return nothing
  // Otherwise, search based on search query from useState hook
  // Run when search query or access token changes
  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;
    spotifyApi.searchTracks(search).then((res) => {
      // setSearchResults(res.body.tracks.items);
      // Limit to 4 with slice()
      // array.slice(startIndex, endIndex not included)
      // Get artists, albums, and songs from items array with map()

      // Artist: res.body.tracks.items[0].artists[0].name
      // Artist URL: res.body.tracks.items[0].artists[0].external_urls.spotify
      // Album: res.body.tracks.items[0].album.name
      // Album URL: res.body.tracks.items[0].album.external_urls.spotify
      // Album Image: res.body.tracks.items[0].album.images[0].url
      // Song: res.body.tracks.items[0].name
      // Song URL: res.body.tracks.items[0].external_urls.spotify
      // URI for key: res.body.tracks.items[0]uri

      setSearchResults(
        res.body.tracks.items.slice(0, 4).map((item) => {
          return {
            artist: item.artists[0].name,
            artist_url: item.artists[0].external_urls.spotify,
            album: item.album.name,
            album_image: item.album.images[0].url,
            album_url: item.album.external_urls.spotify,
            song: item.name,
            song_url: item.external_urls.spotify,
            uri: item.uri,
          };
        })
      );
    });
  }, [search, accessToken]);

  // Search query from onChange event
  return (
    <div>
      <h1>Search</h1>
      <form>
        <input
          type="search"
          placeholder="Search for artist, album, or song..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
