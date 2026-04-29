import { top_movies } from "../utils/movieUtils.js"
import MovieList from "./MovieList.jsx"

const TopMovies = ({ movies, setSelectMovie }) => {
  return (
    <div className='topMovies w-full px-15 mb-20'>
        <h1 className="text-2xl font-extrabold text-secondary mb-10">TOP 5 Movies</h1>
        <div className="top flex-center gap-7">
            <MovieList movies={ top_movies(movies) } setSelectMovie={setSelectMovie}/>
        </div>
    </div>
  )
}

export default TopMovies
