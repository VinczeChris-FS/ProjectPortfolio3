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
        // setAccessToken(res.data.accessToken);
        // setRefreshToken(res.data.refreshToken);
        // setTokenType(res.data.tokenType);
        // setExpiresIn(res.data.expiresIn);
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);

  // Store access token data in database
  useEffect(() => {
    const addAccessTokenData = async () => {
      await axios
        .post("http://localhost:3001/spotify/v1/access_token", {
          data,
        })
        .catch((err) => {
          console.log(err);
        });
    };
    addAccessTokenData();
  }, [data]);

  // Get access token data from database
  useEffect(() => {
    const getAccessTokenData = async () => {
      await axios
        .get("http://localhost:3001/spotify/v1/access_token")
        .then((res) => {
          // Array of access token data returned
          console.log(res.data);
          // console.log(res.data[0].accessToken);
          setAccessToken(res.data[0].accessToken);
          setRefreshToken(res.data[0].refreshToken);
          setTokenType(res.data[0].tokenType);
          setExpiresIn(res.data[0].expiresIn);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAccessTokenData();
  }, []);

  // Return the data from Spotify Web API
  return [data, accessToken, refreshToken, tokenType, expiresIn];
};

export default useAuth;
