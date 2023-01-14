//* Search page

// import axios from "axios";
import useAuth from "../hooks/useAuth";

const Search = ({ code }) => {
  // Get data from useAuth custom hook
  const [data, accessToken, refreshToken, tokenType, expiresIn] = useAuth(code);

  // Store access token data in database
  // const addAccessToken = async () => {
  //   await axios
  //     .post("http://localhost:3001/spotify/v1/access_token", { data })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // Get access token data from database
  // const getAccessToken = async () => {
  //   await axios
  //     .get("http://localhost:3001/spotify/v1/access_token")
  //     .then((response) => {
  //       console.log(response.data[0].accessToken); // Array of access token data returned
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // Call functions
  // addAccessToken();
  // getAccessToken();

  return (
    <div>
      <h1>Search</h1>
      <p>
        <strong>Access Token:</strong> {accessToken}
      </p>
      <p>
        <strong>Refresh Token:</strong> {refreshToken}
      </p>
      <p>
        <strong>Token Type:</strong> {tokenType}
      </p>
      <p>
        <strong>Expires In:</strong> {expiresIn}
      </p>
    </div>
  );
};

export default Search;
