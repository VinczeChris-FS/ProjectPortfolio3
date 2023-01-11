//* Custom hook

import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = (code) => {
  // useState hook
  const [accessToken, setAccessToken] = useState("");

  // useEffect hook

  // Authentication to get access token
  // Run every time the code changes
  useEffect(() => {
    axios
      .post("http://localhost:3001/spotify/v1/login", {
        code,
      })
      .then((res) => {
        // console.log(res.data);
        setAccessToken(res.data.accessToken);
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);

  // Return the access token
  return accessToken;
};

export default useAuth;
