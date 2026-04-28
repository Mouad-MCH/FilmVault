
export const top_movies = (movies) => {
    const moviesSort = movies.sort((a, b) => b.rating - a.rating);
    return moviesSort.slice(0, 5);
}
