import { movieData } from "./data/initialMovies.js";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TopMovies from "./components/TopMovies.jsx";
import LibrarySecssion from "./components/LibrarySecssion.jsx";
import { useState, useEffect } from "react";
import { getMovies, saveMovies } from "./utils/storage.js";

const App = () => {
  const get_Movies = getMovies() || movieData;

  const [movies, setMovies] = useState(get_Movies);
  const [selectMovie, setSelectMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState("add");

  const handleSaveMovie = (movie) => {
    if (type === "add") {
      setMovies((prev) => [...prev, { ...movie, id: Date.now() }]);
    }

    if (type === "edit") {
      setMovies((prev) =>
        prev.map((mov) =>
          mov.id === selectMovie.id ? { ...mov, ...movie } : mov,
        ),
      );

      setSelectMovie(null);
    }
    setIsModalOpen(false);
  };

  const handleDeleteMovie = (id) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));

    if(selectMovie?.id === id) {
      setSelectMovie(null)
    }
  }

  useEffect(() => {
    saveMovies(movies);
  }, [movies, setMovies]);

  return (
    <div>
      <Navbar setIsModalOpen={setIsModalOpen} setType={setType} />

      <HeroSection movies={movies} />
      <TopMovies movies={movies} setSelectMovie={setSelectMovie} />

      <LibrarySecssion
        movies={movies}
        selectMovie={selectMovie}
        setSelectMovie={setSelectMovie}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        type={type}
        onSave={handleSaveMovie}
        setType={setType}
        deleteMovie={handleDeleteMovie}
      />
    </div>
  );
};

export default App;
