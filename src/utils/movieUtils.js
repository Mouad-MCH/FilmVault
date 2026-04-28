
export const top_movies = (movies) => {
    const moviesSort = movies.sort((a, b) => b.rating - a.rating);
    return moviesSort.slice(0, 5);
}

export const filter_movies = (movies = [], rating, genres) => {  
    const movieFilter = movies.filter((el) => el.rate.aggregaterate >= rating && el.genres?.includes(genres) )
    return movieFilter
}
