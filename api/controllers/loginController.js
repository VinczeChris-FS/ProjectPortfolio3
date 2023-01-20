//* Controller for http://localhost:3001/spotify/v1/login

// For Spotify Web API Node
const SpotifyWebApi = require("spotify-web-api-node");

// Get access token from Spotify Web API
const loginSpotify = (req, res) => {
  // Get code from request body
  const code = req.body.code;
  // Use Spotify Web API Node
  const spotifyWebApi = new SpotifyWebApi({
    // Use dotenv for credentials
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  spotifyWebApi
    .authorizationCodeGrant(code)
    .then((data) => {
      console.log("Access token granted");
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
        tokenType: data.body.token_type,
      });
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

module.exports = { loginSpotify };
