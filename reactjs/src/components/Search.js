//* Search page

// import axios from "axios";
import useAuth from "../hooks/useAuth";

const Search = ({ code }) => {
  // Get the access toke from useAuth custom hook
  const accessToken = useAuth(code);

  return (
    <div>
      <h1>Search</h1>
      <p>
        <strong>Access Token:</strong> {accessToken}
      </p>
    </div>
  );
};

export default Search;
