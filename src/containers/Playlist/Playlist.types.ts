export interface Track {
  id: string;
  album: {
    images: { url: string }[];
  };
  name: string;
  preview_url: string;
  uri: string;
  artists: Artist[];
}

export interface PlaylistTrack {
  track: Track;
}

export interface PlaylistProps {
  tracks: {
    items: PlaylistTrack[];
  };
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}
