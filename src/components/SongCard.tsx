import type { Song } from "../data/songs";

type SongCardProps = {
  song: Song;
};

export default function SongCard({ song }: SongCardProps) {
  return (
    <article className="song-card">
      <img
        className="song-cover"
        src={song.cover}
        alt={`${song.title} cover`}
      />

      <h2>{song.title}</h2>

      {song.year && <p>{song.year}</p>}

      <audio controls preload="metadata" src={song.audio}>
        Your browser does not support audio playback.
      </audio>
    </article>
  );
}