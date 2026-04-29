import { top_movies } from '../utils/movieUtils.js'

const HeroSection = ({ movies }) => {
  const topMovie = top_movies(movies)[0]
  return (
    <div className='heroSection relative text-secondary flex flex-col items-left justify-end p-20 mb-30'>
      <div className="head_spans">
        <span>
          <i class="fa-solid fa-star"></i>
          { topMovie?.rate.aggregaterate }
        </span>
        <span>{ topMovie?.genres[0] }</span>
        <span> {topMovie?.date} </span>
      </div>

      <h1 className='head_title'>{ topMovie?.title }</h1>
      <p className='head_desc'>
        {topMovie?.plot}
      </p>

      <div className="buttons">
        <button className="btn-primary">
          <i class="fa-solid fa-play mr-3"></i>
          Watch Trailer</button>
        <button className="btn-secondary">Add to Watchlist</button>
      </div>
      
      <div className='absolute border-2 border-primary overflow-hidden bottom-[-100px] max-lg:right-30 max-sm:left-[50%] max-sm:translate-x-[-50%] max-sm:bottom-[-330px] right-60 max-md:right-10 bg-primary w-60 h-95 rounded-lg '>
        <img className='w-full h-full bg-cover' src={topMovie?.image.url} alt="photo" />
      </div>
    </div>
  )
}

export default HeroSection