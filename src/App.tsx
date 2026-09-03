import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import SongCard from './components/SongCard'
import { songs } from './data/songs'

export default function App() {
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
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
