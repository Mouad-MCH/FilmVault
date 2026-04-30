


export const getMovies = () => {
  try {
    const data = localStorage.getItem("movies");
    
    return data ? JSON.parse(data) : [];
  }catch(error) {
    console.error('Error parsing movies',error)
  }
};


export const saveMovies = (movies) => {
  try {
    localStorage.setItem("movies", JSON.stringify(movies));
  }catch(error) {
    console.error("error saving movies", error)
  }
};