//* Custom hook

import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = (code) => {
  //* useState hooks
  const [data, setData] = useState();
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  // const [tokenType, setTokenType] = useState("");
  const [expiresIn, setExpiresIn] = useState(0);

  //* useEffect hooks
  // Authentication to get access token
  // Post code to login endpoint
  // Run every time the code changes
  useEffect(() => {
    axios
      .post("http://localhost:3001/spotify/v1/login", {
        code,
      })
      .then((res) => {
        // console.log(res.data);
        // Store data object in useState hook
        setData(res.data);
        // console.log(res.data.accessToken);
        // setAccessToken(res.data.accessToken);
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);

  // Refresh token
  // Post refresh token to refresh endpoint
  // Run every time the refreshToken or expiresIn changes
  useEffect(() => {
    // If no refreshToken or expiresIn is set, return nothing
    if (!refreshToken || expiresIn === 0) {
      return;
    }
    // Refresh one minute before it expires with setInitial
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/spotify/v1/refresh", {
          refreshToken,
        })
        .catch(() => {
          window.location = "/";
        });
    }, (expiresIn - 60) * 1000);
    return () => {
      clearInterval(interval);
    };
  }, [refreshToken, expiresIn]);

  // Store access token data in database
  // Post data to access token endpoint
  // Run every time the access token data changes
  useEffect(() => {
    // Only if there is data to store
    if (data) {
      const addAccessTokenData = async () => {
        await axios
          .post("http://localhost:3001/spotify/v1/access_token", {
            data,
          })
          .catch((err) => {
            console.log(err);
          });
      };
      // Call function
      addAccessTokenData();
    }
  }, [data]);

  // Get access token data from database
  // Get data from access token endpoint
  // Run every time the access token data changes
  useEffect(() => {
    // Only if there is data to get
    if (data) {
      const getAccessTokenData = async () => {
        await axios
          .get("http://localhost:3001/spotify/v1/access_token")
          .then((res) => {
            // Array of access token data returned
            console.log(res.data);
            // console.log(res.data[0].accessToken);
            // Store data in useState hooks
            setAccessToken(res.data[0].accessToken);
            setRefreshToken(res.data[0].refreshToken);
            // setTokenType(res.data[0].tokenType);
            setExpiresIn(res.data[0].expiresIn);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      // Call function
      getAccessTokenData();
    }
  }, [data]);

  // Return the access token from database to the Search component
  return accessToken;
};

export default useAuth;
