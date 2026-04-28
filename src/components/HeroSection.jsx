import React from 'react'

const HeroSection = () => {
  return (
    <div className='heroSection relative text-secondary flex flex-col items-left justify-end p-20 mb-30'>
      <div className="head_spans">
        <span>
          <i class="fa-solid fa-star"></i>
          9.5
        </span>
        <span> Sci-Fi Epic</span>
        <span> 2024 </span>
      </div>

      <h1 className='head_title'>The Obsidian Echo</h1>
      <p className='head_desc'>
        In a distant future, humanity's last hope 
        lies in the hands of a rogue scientist and a fearless pilot as they
         embark on a perilous journey to save Earth from an impending 
         cosmic catastrophe.
      </p>

      <div className="buttons">
        <button className="btn-primary">
          <i class="fa-solid fa-play mr-3"></i>
          Watch Trailer</button>
        <button className="btn-secondary">Add to Watchlist</button>
      </div>
      
      <div className='absolute border-2 border-primary overflow-hidden bottom-[-100px] max-lg:right-30 max-sm:left-[50%] max-sm:translate-x-[-50%] max-sm:bottom-[-330px] right-60 max-md:right-10 bg-primary w-60 h-95 rounded-lg '>
        <img className='w-full h-full bg-cover' src="src/assets/Background.png" alt="photo" />
      </div>
    </div>
  )
}

export default HeroSection