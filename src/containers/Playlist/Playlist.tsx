import { FC, useContext, useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/";
import usePlaylistData from "../../hooks/usePlaylistData";
import { Context } from "../../store/context";
import { PLAYLIST_IDS } from "./Playlist.constants";
import { PlaylistTrack } from "./Playlist.types";
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
    <div className="container mx-auto max-w-7xl px-4 md:px-0 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
      {loading && <LoadingSpinner />}
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="md:w-2/3">
        {playlistData?.tracks?.items.map((trackItem: PlaylistTrack) => (
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
