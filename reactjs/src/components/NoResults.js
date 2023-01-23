//* No results page

// Import React Icon
import { RiSpotifyFill } from "react-icons/ri";

const NoResults = () => {
  return (
    <div className="no-results">
      <RiSpotifyFill style={{ fontSize: "4rem", color: "#1db954" }} />
      <h1>No Results</h1>
      <p>Please type in a search query to get started...</p>
    </div>
  );
};

export default NoResults;
