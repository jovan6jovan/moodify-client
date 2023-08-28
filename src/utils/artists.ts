import { Artist } from "../containers/Playlist/Playlist.types";

export const formatArtistNames = (artists: Artist[]) => {
  if (artists.length === 1) {
    return artists[0].name;
  } else {
    return artists.map((artist) => artist.name).join(", ");
  }
};
