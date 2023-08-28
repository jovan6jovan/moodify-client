import { Track } from "../Playlist.types";

export interface TrackProps {
  track: Track;
  playlistId: string;
  refreshPlaylistData: () => void;
  isAddMode?: boolean;
}
