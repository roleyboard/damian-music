import type { Song } from "../data/songs";

type SongCardProps = {
  song: Song;
  onSelect: (song: Song) => void;
};

export default function SongCard({ song, onSelect }: SongCardProps) {
  return (
    <article className="song-card">
      <button type="button" className="song-select" onClick={() => onSelect(song)}>
        <span className="cover-frame">
          <img className="song-cover" src={song.cover} alt="" />
          <span className="play-mark" aria-hidden="true">&#9654;</span>
        </span>
        <span className="song-title">{song.title}</span>
        {song.year && <span className="song-year">{song.year}</span>}
      </button>
    </article>
  );
}
