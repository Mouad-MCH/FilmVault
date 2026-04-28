import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
  return (
    <div className='movieList flex items-center justify-center gap-5 flex-wrap'>
      {
        [...movies].map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))
      }
    </div>
  )
}

export default MovieList
