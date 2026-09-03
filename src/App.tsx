import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import SongCard from './components/SongCard'
import SongPlayer from './components/SongPlayer'
import type { Song } from './data/songs'
import { songs } from './data/songs'

export default function App() {
  const [selectedSong, setSelectedSong] = useState<Song | null>(null)

  return (
    <>
      <Header />

      <main id="top">
        <section className="music" aria-labelledby="music-heading">
          <div className="section-heading">
            <p>Selected works</p>
            <h2 id="music-heading">Listen</h2>
          </div>

          <div className="song-grid">
            {songs.map((song) => (
              <SongCard key={song.id} song={song} onSelect={setSelectedSong} />
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {selectedSong && (
        <SongPlayer song={selectedSong} onClose={() => setSelectedSong(null)} />
      )}
    </>
  )
}
