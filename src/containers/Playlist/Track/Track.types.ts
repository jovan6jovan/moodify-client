import { TrackItem } from "../Playlist.types";

export interface TrackProps {
  track: TrackItem;
  playlistId: string;
  refreshPlaylistData: () => void;
  isAddMode?: boolean;
}
