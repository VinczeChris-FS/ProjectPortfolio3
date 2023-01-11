import Login from "./components/Login";
import Search from "./components/Search";
import "./App.css";

// Get code from the URL returned from Spotify Web API
const code = new URLSearchParams(window.location.search).get("code");

function App() {
  // If code exists then render Dashboard component, otherwise render Search component
  return <div>{code ? <Search code={code} /> : <Login />}</div>;
}

export default App;
