import { describe, expect, it } from "vitest";
import { Artist } from "../containers/Playlist/Playlist.types";
import { formatArtistNames } from "../utils/artists";

describe("formatArtistNames", () => {
  it("formats single artist name", () => {
    const artists: Artist[] = [
      {
        external_urls: {
          spotify: "",
        },
        href: "...",
        id: "...",
        name: "Artist 1",
        type: "...",
        uri: "...",
      },
    ];
    const result = formatArtistNames(artists);
    expect(result).toBe("Artist 1");
  });

  it("formats multiple artist names", () => {
    const artists: Artist[] = [
      {
        external_urls: {
          spotify: "",
        },
        href: "...",
        id: "...",
        name: "Artist 1",
        type: "...",
        uri: "...",
      },
      {
        external_urls: {
          spotify: "",
        },
        href: "...",
        id: "...",
        name: "Artist 2",
        type: "...",
        uri: "...",
      },
    ];
    const result = formatArtistNames(artists);
    expect(result).toBe("Artist 1, Artist 2");
  });
});
