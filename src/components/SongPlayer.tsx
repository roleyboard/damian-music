import { useEffect, useRef } from 'react'
import type { Song } from '../data/songs'

type SongPlayerProps = {
  song: Song
  onClose: () => void
}

export default function SongPlayer({ song, onClose }: SongPlayerProps) {
  const closeButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeButton.current?.focus()

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [onClose])

  return (
    <div className="player-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="song-player"
        role="dialog"
        aria-modal="true"
        aria-labelledby="player-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button ref={closeButton} type="button" className="player-close" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
          <span className="sr-only">Close player</span>
        </button>

        <img className="player-cover" src={song.cover} alt={`${song.title} cover`} />
        <div className="player-details">
          <p>Now playing</p>
          <h2 id="player-title">{song.title}</h2>
          <audio key={song.id} controls autoPlay preload="metadata" src={song.audio}>
            Your browser does not support audio playback.
          </audio>
        </div>
      </section>
    </div>
  )
}
