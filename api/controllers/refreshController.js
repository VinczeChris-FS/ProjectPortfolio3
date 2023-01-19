//* Controller for http://localhost:3001/spotify/v1/refresh

// For Spotify Web API Node
const SpotifyWebApi = require("spotify-web-api-node");

// Get refresh token from Spotify Web API
const refreshSpotify = (req, res) => {
  // Get code from request body
  const refreshToken = req.body.refreshToken;
  // Use Spotify Web API Node
  const spotifyWebApi = new SpotifyWebApi({
    // Use dotenv for credentials
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    refreshToken: refreshToken,
  });

  spotifyWebApi
    .refreshAccessToken()
    .then((data) => {
      // console.log("Access token refreshed");
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

module.exports = { refreshSpotify };
