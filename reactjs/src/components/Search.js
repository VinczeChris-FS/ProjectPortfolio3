//* Search page

// import axios from "axios";
import useAuth from "../hooks/useAuth";

const Search = ({ code }) => {
  // Get data from useAuth custom hook
  const [data, accessToken, refreshToken, tokenType, expiresIn] = useAuth(code);

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
