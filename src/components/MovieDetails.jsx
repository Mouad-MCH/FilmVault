
const MovieDetails = ({ movie, setSelectMovie, setType, setIsModalOpen }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex-center">
      <div className="movie_details w-300 h-150 bg-[#1A1823] rounded-lg flex items-center overflow-hidden">

        <div className="movie_image h-full w-[35%]">
          <img className="w-full h-full" src={movie.image.url} alt="photo" />
        </div>

        <div className="info relative h-full w-[65%] p-10">
          <div 
            className="close_details absolute right-5 top-5 flex-center rounded-full border botder-primary w-10 h-10 text-secondary font-extrabold cursor-pointer hover:text-destructive"
            onClick={() => setSelectMovie(null)}
          >X</div>
          <div className="border-b border-secondary h-[90%] mb-5">

             <h1 className="text-4xl font-extrabold text-secondary">{ movie.title }</h1>

             <div className="my-5 flex items-center gap-10 text-secondary">
               <div className="flex items-center gap-5 font-bold text-accent">
                 <p>{movie.date}</p>
                 <span>.</span>
                 <p>{((movie.runtimeSeconds)/360).toFixed(0)}h 18m</p>
                 <span>.</span>
                 <p className="text-primary flex-center gap-1">
                   <i class="fa-solid fa-star"></i>
                   <p className="text-secondary">{movie.rate.aggregaterate}</p>
                 </p>
               </div>
               <div className="px-2 py-1 rounded-lg font-bold border border-secondary bg-foreground ">4K HDR</div>
             </div>

             <div className="genres flex items-center flex-wraper gap-6 mb-10 mt-10">
              {/* use map there  */}
              {
                movie.genres.map((genre) => (
                  <p>{genre}</p>
                ))
              }
             </div>

             <div className="desc">
              <h2 className="text-2xl font-extrabold bg-secodary mb-3">SYNOPSIS</h2>
              <p className="text-accent">
                {movie.plot}
              </p>
             </div>

             <div className="flex items-center justify-between mt-5 w-full">
              <div>
                <h3 className="text-accent font-bold">DIRECTOR</h3>
                <p className="text-secondary">Elias Vance</p>
              </div>
              <div>
                <h3 className="text-accent font-bold">STARRING</h3>
                <p className="text-secondary">Sarah Connor, David Oyelowo, Anya Taylor-Joy</p>
              </div>
             </div>

          </div>

          <div className="btn-details flex items-center justify-between">
            <div className="left_btn flex items-center gap-5">
              <button className="bg-primary shadow-lg shadow-primary text-white outline-0 px-6 py-3 rounded-lg font-bold hover:bg-secondary hover:text-foreground shadow-sm transition-all duration-300 cursor-pointer">
                Watch Trailer
              </button>
              <button 
                className="cursor-pointer text-white outline-0 px-6 py-3 rounded-lg border-2 border-primary"
                onClick={() => {setType("edit"); setIsModalOpen(true)}}
              >Edite Details</button>
            </div>

            <div className="delete_details cursor-pointer">
              <p className="font-bold text-accent hover:text-red-300">Delete</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MovieDetails