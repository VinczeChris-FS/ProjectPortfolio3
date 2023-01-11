//* Search page

import useAuth from "../hooks/useAuth";

const Search = ({ code }) => {
  const accessToken = useAuth(code);

  return (
    <div>
      <h1>Search</h1>
      <p>Code: {code}</p>
      <p>Access Token: {accessToken}</p>
    </div>
  );
};

export default Search;
