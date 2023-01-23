//* Login page

// Import React Icon
import { RiSpotifyFill } from "react-icons/ri";

// Environment variable from .env file
// Spotify Client ID
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000`;

const Login = () => {
  return (
    <div className="login">
      <RiSpotifyFill style={{ fontSize: "4rem", color: "#1db954" }} />
      <h1>Please Login</h1>
      <p>
        In order to search for artists, tracks, or songs you must login to your
        Spotify account
      </p>
      <a className="login--btn" href={AUTH_URL}>
        Login
      </a>
    </div>
  );
};

export default Login;
