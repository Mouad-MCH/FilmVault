import { movieData } from './data/initialMovies.js'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import TopMovies from './components/TopMovies.jsx'
import LibrarySecssion from './components/LibrarySecssion.jsx'

const App = () => {

  return (
    <div>
      <Navbar/>
      <HeroSection />
      <TopMovies movies={movieData}/>
      <LibrarySecssion movies={movieData}/>
    </div>
  )
}

export default App
