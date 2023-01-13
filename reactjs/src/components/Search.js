//* Search page

import useAuth from "../hooks/useAuth";

const Search = ({ code }) => {
  // Get data from useAuth custom hook
  const [accessToken, refreshToken, tokenType, expiresIn] = useAuth(code);

  return (
    <div>
      <h1>Search</h1>
      <p>
        <strong>Code:</strong> {code}
      </p>
      <p>
        <strong>Access Token:</strong> {accessToken}
      </p>
      <p>
        <strong>Token:</strong> {refreshToken}
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
