import { movieData } from './data/initialMovies.js'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import TopMovies from './components/TopMovies.jsx'
import LibrarySecssion from './components/LibrarySecssion.jsx'
import { useState } from 'react'

const App = () => {
  const [movies, setMovies] = useState(movieData)
  const [selectMovie, setSelectMovie] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [type, setType] = useState("add")


  const handleSaveMovie = (movie) => {
    if(type === "add") {
      setMovies((prev) => [...prev, {...movie, id: Date.now()}])
    }

    if(type === "edit") {
      setMovies((prev) => {
        prev.map((mov) => {
          mov.id === selectMovie.id ? { ...mov, ...movie } : mov
        })
      })

      setSelectMovie(null)  
    }
    setIsModalOpen(false)
  }

  return (
    <div>
      <Navbar setIsModalOpen={ setIsModalOpen } setType={setType} />

      <HeroSection movies={movieData} />
      <TopMovies movies={movieData} setSelectMovie={setSelectMovie} />

      <LibrarySecssion 
        movies={movies} 
        selectMovie={selectMovie} 
        setSelectMovie={setSelectMovie} 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        type={ type }
        onSave={ handleSaveMovie }
        setType={setType}
      />
    </div>
  )
}

export default App
