//* Results page

// Import React Icon
import { AiOutlineArrowRight } from "react-icons/ai";

// Import components
import Artists from "./Artists";
import Albums from "./Albums";
import Songs from "./Songs";

const Results = ({ searchResults }) => {
  return (
    <div className="results">
      <section>
        <h2>
          Artists <AiOutlineArrowRight style={{ fontSize: "2rem" }} />
        </h2>
        {searchResults.map((search) => {
          return <Artists search={search} key={search.uri} />;
        })}
      </section>
      <section>
        <h2>
          Albums <AiOutlineArrowRight style={{ fontSize: "2rem" }} />
        </h2>
        {searchResults.map((search) => {
          return <Albums search={search} key={search.uri} />;
        })}
      </section>
      <section>
        <h2>
          Songs <AiOutlineArrowRight style={{ fontSize: "2rem" }} />
        </h2>
        {searchResults.map((search) => {
          return <Songs search={search} key={search.uri} />;
        })}
      </section>
    </div>
  );
};

export default Results;
