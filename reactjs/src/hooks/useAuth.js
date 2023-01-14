//* Custom hook

import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = (code) => {
  // useState hooks
  const [data, setData] = useState({});
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [tokenType, setTokenType] = useState("");
  const [expiresIn, setExpiresIn] = useState(0);

  // useEffect hooks

  // Authentication to get access token
  // Run every time the code changes
  useEffect(() => {
    axios
      .post("http://localhost:3001/spotify/v1/login", {
        code,
      })
      .then((res) => {
        // console.log(res.data); // Object
        setData(res.data);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setTokenType(res.data.tokenType);
        setExpiresIn(res.data.expiresIn);
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);

  // Return the data from Spotify Web API
  return [data, accessToken, refreshToken, tokenType, expiresIn];
};

export default useAuth;
