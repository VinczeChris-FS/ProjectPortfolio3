import Layout from "./components/Layout";
import Login from "./components/Login";
import Search from "./components/Search";
import "./App.css";

// Get code from the URL returned from Spotify Web API after successful login
const code = new URLSearchParams(window.location.search).get("code");

function App() {
  // If code exists then render Search component, otherwise render Login component
  return (
    <div>
      <Layout>{code ? <Search code={code} /> : <Login />}</Layout>
    </div>
  );
}

export default App;
