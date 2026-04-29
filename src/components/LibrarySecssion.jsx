import { useState } from "react"
import MovieList from "./MovieList"
import Filters from "./Filters"
import MovieDetails from "./MovieDetails"

const LibrarySecssion = ({ movies = [], selectMovie, setSelectMovie }) => {
    const [ movieList, setMovieList ] = useState(movies)
    
  return (
    <div className="library p-15">
      <h1 className="text-2xl font-extrabold text-secondary mb-5">Explore Library</h1>
      <div className="display_movies w-full">
        <Filters movies={movies} setMovieList={setMovieList}/>
        <MovieList 
          movies={movieList}
          setSelectMovie={ setSelectMovie }
        />

        {
          selectMovie && (
            <MovieDetails movie={selectMovie} setSelectMovie={setSelectMovie} />
          )
        }

      </div>
    </div>
  )
}

export default LibrarySecssion
