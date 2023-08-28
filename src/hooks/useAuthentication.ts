import { useEffect, useState } from "react";
import SpotifyApi from "../api/spotify";
import { getTokenFromUrl } from "../utils/spotify";

export const useAuthentication = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [authenticationInitiated, setAuthenticationInitiated] = useState(false);

  useEffect(() => {
    const token = getTokenFromUrl().access_token;
    window.location.hash = "";

    if (token) {
      setAuthenticationInitiated(true);

      SpotifyApi.setAccessToken(token);
      SpotifyApi.getMe()
        .then(() => {
          setLoggedIn(true);
        })
        .catch((error) => {
          console.error("Error fetching user data", error);
        });
    }
  }, []);

  return { loggedIn, authenticationInitiated };
};
