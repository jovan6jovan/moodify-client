import { useEffect, useState } from "react";
import SpotifyApi from "../api/spotify";

const usePlaylistData = (playlistId: string) => {
  const [playlistData, setPlaylistData] = useState<any>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    setError(null);

    if (playlistId) {
      setLoading(true);
      SpotifyApi.getPlaylist(playlistId)
        .then((res) => {
          setPlaylistData(res);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching playlist data", error);
          setError("An error occurred while fetching playlist data.");
          setLoading(false);
        });
    }
  }, [playlistId]);

  const refreshPlaylistData = async () => {
    try {
      const res = await SpotifyApi.getPlaylist(playlistId);
      setPlaylistData(res);
    } catch (error) {
      console.error("Error refreshing playlist data", error);
    }
  };

  return { playlistData, setPlaylistData, refreshPlaylistData, loading, error };
};

export default usePlaylistData;
