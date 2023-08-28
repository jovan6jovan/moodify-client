import { ChangeEvent, FC, FormEvent, useState } from "react";
import SpotifyApi from "../../../api/spotify";
import { TrackItem } from "../Playlist.types";
import Track from "../Track";
import { SearchSongsFormProps } from "./SearchSongsForm.types";

const SearchSongsForm: FC<SearchSongsFormProps> = ({
  playlistId,
  refreshPlaylistData,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await SpotifyApi.searchTracks(searchQuery, { limit: 5 });
      setSearchResults(response.tracks.items);
    } catch (error) {
      console.error("Error searching for tracks:", error);
      setSearchResults([]);
    }
  };

  const searchBtnDisabled = !searchQuery.length;
  const searchBtnDisabledStyles = searchBtnDisabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:bg-blue-600";

  return (
    <div className="mt-4 mb-8 px-4">
      <p className="mb-2 text-lg font-semibold">
        Want to add a song to the playlist?
      </p>
      <form onSubmit={handleSearchSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Search for a song..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded-r-md ${searchBtnDisabledStyles} focus:outline-none focus:ring focus:border-blue-300`}
          disabled={searchBtnDisabled}
        >
          Search
        </button>
      </form>
      {searchResults.map((track: TrackItem) => (
        <Track
          key={track.id}
          track={track}
          playlistId={playlistId}
          refreshPlaylistData={refreshPlaylistData}
          isAddMode
        />
      ))}
    </div>
  );
};

export default SearchSongsForm;
