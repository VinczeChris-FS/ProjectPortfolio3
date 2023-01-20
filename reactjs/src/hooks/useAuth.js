//* Custom Hook to get access token data from Spotify Web API

import { useEffect, useState } from "react";
import axios from "axios";

const useAuth = (code) => {
  //* useState Hooks
  const [data, setData] = useState();
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [expiresIn, setExpiresIn] = useState(0);

  //* useEffect Hooks
  // Authentication to get access token
  // Post data to login page
  // Run every time the code changes
  useEffect(() => {
    axios
      .post("http://localhost:3001/spotify/v1/login", {
        code,
      })
      .then((res) => {
        setData(res.data);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        // setExpiresIn(61);
        setExpiresIn(res.data.expiresIn);
        // Remove the code in the URL with pushState
        window.history.pushState({}, null, "/");
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);

  // Refresh token
  // If no refreshToken or expiresIn is set then return nothing
  // Only refresh one minute before it expires with setInterval
  // Run every time the refreshToken or expiresIn changes
  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/spotify/v1/refresh", {
          refreshToken,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          // setExpiresIn(61);
          setExpiresIn(res.data.expiresIn);
        })
        .catch(() => {
          window.location = "/";
        });
    }, (expiresIn - 60) * 1000);
    return () => {
      clearInterval(interval);
    };
  }, [refreshToken, expiresIn]);

  // console.log(accessToken);
  // Return the access token to the Search component
  return [accessToken, data];
};

export default useAuth;
