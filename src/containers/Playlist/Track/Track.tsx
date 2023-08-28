import { FC, useState } from "react";
import SpotifyApi from "../../../api/spotify";
import ConfirmationModal from "../../../components/ConfirmationModal";
import { formatArtistNames } from "../../../utils/artists";
import { TrackProps } from "./Track.types";

const Track: FC<TrackProps> = ({
  track,
  playlistId,
  refreshPlaylistData,
  isAddMode = false,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleRemove = () => {
    setShowModal(true);
  };

  const handleConfirmRemove = async () => {
    try {
      await SpotifyApi.removeTracksFromPlaylist(playlistId, [track]);
      refreshPlaylistData();
    } catch (error) {
      console.error("Error removing track", error);
    }
    setShowModal(false);
  };

  const handleCancelRemove = () => {
    setShowModal(false);
  };

  const handleAdd = async () => {
    if (isAddMode) {
      try {
        await SpotifyApi.addTracksToPlaylist(playlistId, [track.uri]);
        refreshPlaylistData();
      } catch (error) {
        console.error("Error adding track", error);
      }
    }
  };

  return (
    <div className="flex flex-wrap items-center space-x-4 p-4 border-b border-gray-300">
      <img
        src={track.album.images[0].url}
        alt={track.name}
        className="w-24 h-24"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{track.name}</h3>
        <p className="text-gray-600 mb-2">{formatArtistNames(track.artists)}</p>
        <audio controls>
          <source src={track.preview_url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      {isAddMode ? (
        <button className="text-green-700" onClick={handleAdd}>
          Add
        </button>
      ) : (
        <button className="text-red-500" onClick={handleRemove}>
          Remove
        </button>
      )}

      {showModal && (
        <ConfirmationModal
          message="Are you sure you want to remove this song from the playlist?"
          onConfirm={handleConfirmRemove}
          onCancel={handleCancelRemove}
        />
      )}
    </div>
  );
};

export default Track;
