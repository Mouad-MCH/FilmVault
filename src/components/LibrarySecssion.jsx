import { useState } from "react"
import MovieList from "./MovieList"
import Filters from "./Filters"
import MovieDetails from "./MovieDetails"
import MovieFormModal from "./MovieFormModal"

const LibrarySecssion = ({ movies = [], selectMovie, setSelectMovie, isModalOpen, setIsModalOpen, type, onSave, setType, deleteMovie }) => {
      const [ movieList, setMovieList ] = useState(null)
    const displayedMovies = movieList ?? movies;
    
  return (
    <div className="library p-15">
      <h1 className="text-2xl font-extrabold text-secondary mb-5">Explore Library</h1>
      <div className="display_movies w-full">
        <Filters movies={movies} setMovieList={setMovieList}/>
        <MovieList 
          movies={displayedMovies}
          setSelectMovie={ setSelectMovie }
        />

        {
          selectMovie && (
            <MovieDetails 
              movie={selectMovie} 
              setSelectMovie={setSelectMovie} 
              setType={setType}
              setIsModalOpen={setIsModalOpen}
              deleteMovie={deleteMovie}
            />
          )
        }

        {
          isModalOpen && (
            <MovieFormModal 
              movie={ type === "edit" ? selectMovie : null}
              setIsModalOpen={setIsModalOpen}
              type={type}
              onSave={onSave}
            />
          )
        }
      </div>
    </div>
  )
}

export default LibrarySecssion
