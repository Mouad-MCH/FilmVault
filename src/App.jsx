import { movieData } from './data/initialMovies.js'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import TopMovies from './components/TopMovies.jsx'
import LibrarySecssion from './components/LibrarySecssion.jsx'
import { useState } from 'react'

const App = () => {
  const [selectMovie, setSelectMovie] = useState(null)

  return (
    <div>
      <Navbar/>
      <HeroSection />
      <TopMovies movies={movieData} setSelectMovie={setSelectMovie} />
      <LibrarySecssion movies={movieData} selectMovie={selectMovie} setSelectMovie={setSelectMovie} />
    </div>
  )
}

export default App
