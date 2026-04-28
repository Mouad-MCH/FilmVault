import { movieData } from './data/initialMovies.js'
import HeroSection from './components/HeroSection'
import MovieCard from './components/MovieCard'
import MovieList from './components/MovieList'
import Navbar from './components/Navbar'
import TopMovies from './components/TopMovies.jsx'

const App = () => {

  return (
    <div>
      <Navbar/>
      <HeroSection />
      <TopMovies movies={movieData}/>
    </div>
  )
}

export default App
