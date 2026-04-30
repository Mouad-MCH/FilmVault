import { useEffect, useState } from "react"
import { filter_movies } from "../utils/movieUtils.js"

const Filters = ({ movies, setMovieList }) => {
    const [ option, setOption ] = useState("Drama");
    const [ rating, setRating ] = useState(1);
    
    useEffect(() => {
        const filtered = filter_movies(movies, rating, option);
        setMovieList(filtered)
    }, [movies, option, rating, setMovieList])
    
  return (
    <div className="filters w-full flex items-center justify-start gap-10 pl-20 mb-10 text-secondary">
        <select name="O" value={option} onChange={(e) => setOption(e.target.value)} className="border-2 border-primary p-3 rounded-lg" id="">
            <option value="Biography">Biography</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
        </select>

        <input type="number" placeholder="rating" onChange={(e) => setRating(Number(e.target.value))} className="border-2 border-primary rounded-lg px-5 py-2 w-40"/>

        <button 
          className="bg-primary outline-0 px-6 py-3 rounded-lg font-bold hover:bg-secondary hover:text-foreground shadow-sm transition-all duration-300 cursor-pointer"
          onClick={() => { setMovieList(movies) }}
        >Reset</button>
    </div>
  )
}

export default Filters
