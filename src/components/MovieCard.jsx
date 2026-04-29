
const MovieCard = ({ movie , setSelectMovie}) => {
  return (
    <div className="movieCard" onClick={() => setSelectMovie(movie)}>
      <img src={ movie.image.url } alt="movie" />
      
      <div className="content">
        <h2 className="movie_title">{ movie.title }</h2>

        <div className="info">
            <div className="rating">
                <i class="fa-solid fa-star"></i>
                <p className="text-white font-extrabold">{ movie.rate.aggregaterate }</p>
            </div>

            <div className="genre">
                { movie.genres[0] }
            </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
