//* Search page

import { useState, useEffect } from "react";
import axios from "axios";

// Import React Icon
import { AiOutlineSearch } from "react-icons/ai";

// Custom hook
import useAuth from "../hooks/useAuth";

// Import components
import NoResults from "./NoResults";
import Results from "./Results";

// Spotify Web API Node third party library/package
// Can be used in React as well as Node.js
import SpotifyWebApi from "spotify-web-api-node";

// Environment variable from .env file
// Spotify Client ID
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
});

const Search = ({ code }) => {
  // Get the access token and data from useAuth custom hook
  const [accessToken, data] = useAuth(code);

  //* useState hooks
  // For search queries
  const [search, setSearch] = useState("");
  // console.log(search);
  // For array of search queries results objects
  const [searchResults, setSearchResults] = useState([]);
  // View array of returned search results
  console.log(searchResults);

  //* useEffect hooks
  // Store access token data in database
  // Post data to access token endpoint
  // Run every time the access token data changes
  useEffect(() => {
    if (!data) return;
    axios
      .post("http://localhost:3001/spotify/v1/access_token", {
        data,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  // If no access token, then return nothing
  // Otherwise set the access token to use search query
  // Run when access token changes
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    // console.log("Set access token");
  }, [accessToken]);

  // If no search query is present, return empty array
  // If no access token is present, return nothing
  // Otherwise, search based on search query from useState hook
  // Run when search query or access token changes
  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;
    // Limit to 10 results with JSON object as an option
    // Get artists, albums, and songs from items array with map()
    spotifyApi.searchTracks(search, { limit: 4 }).then((res) => {
      // setSearchResults(res.body.tracks.items);

      // Artist: res.body.tracks.items[0].artists[0].name
      // Artist URL: res.body.tracks.items[0].artists[0].external_urls.spotify
      // Album: res.body.tracks.items[0].album.name
      // Album URL: res.body.tracks.items[0].album.external_urls.spotify
      // Album Image: res.body.tracks.items[0].album.images[0].url
      // Song: res.body.tracks.items[0].name
      // Song URL: res.body.tracks.items[0].external_urls.spotify
      // URI for key: res.body.tracks.items[0]uri

      setSearchResults(
        res.body.tracks.items.map((item) => {
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
  // If there is no search query then render NoResults component
  // If there is a search query then render Results component
  return (
    <div>
      <form className="searchform">
        <AiOutlineSearch style={{ fontSize: "2rem" }} />
        <input
          type="search"
          placeholder="Search for artist, album, or song..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {search === "" ? (
        <NoResults />
      ) : (
        <Results searchResults={searchResults} />
      )}

      {/* <div>
        <h2>Artists</h2>
        {searchResults.map((search) => {
          return <Artists search={search} key={search.uri} />;
        })}
      </div> */}
    </div>
  );
};

export default Search;
