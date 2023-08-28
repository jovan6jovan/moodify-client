import { FC, useContext, useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/";
import usePlaylistData from "../../hooks/usePlaylistData";
import { Context } from "../../store/context";
import { PLAYLIST_IDS } from "./Playlist.constants";
import SearchSongsForm from "./SearchSongsForm/";
import Track from "./Track";

const Playlist: FC = () => {
  const { state } = useContext(Context);
  const { selectedMoodId } = state;
  const playlistId = PLAYLIST_IDS[selectedMoodId as number];

  const { playlistData, setPlaylistData, refreshPlaylistData, loading, error } =
    usePlaylistData(playlistId);

  useEffect(() => {
    // Reset playlistData when selectedMoodId changes
    setPlaylistData(undefined);
  }, [selectedMoodId]);

  return (
    <div className="container max-w-5xl mx-auto flex flex-col md:flex-row justify-between">
      {loading && <LoadingSpinner />}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="md:w-2/3">
        {playlistData?.tracks?.items.map((trackItem: any) => (
          <Track
            key={trackItem.track.id}
            track={trackItem.track}
            playlistId={playlistId}
            refreshPlaylistData={refreshPlaylistData}
          />
        ))}
      </div>
      <div className="md:w-1/3 md:pl-8">
        {playlistData?.tracks && (
          <SearchSongsForm
            playlistId={playlistId}
            refreshPlaylistData={refreshPlaylistData}
          />
        )}
      </div>
    </div>
  );
};

export default Playlist;
