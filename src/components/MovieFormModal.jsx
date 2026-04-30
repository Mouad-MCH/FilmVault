

const MovieFormModal = ({ movie, setIsModalOpen, type = "add", onSave }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target

    const newMovie = {
        title: form.title.value,
        genres: [form.genre.value],
        date: form.year.value,
        plot: form.description.value,
        image: {
            url: form.image.value
        },
        rate: { aggregaterate: Number(form.rating.value) },
        actors: form.actors.value.split(",").map((actor) => actor.trim()),
        trailerUrl: form.trailer.value,
        director: form.director.value,
    }

    onSave(newMovie)
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex-center">
      <div className="movie_form_modal relative rounded-lg overflow-y-auto animate-scale-in">
        <div className="modal_header bg-[#1f1b23] flex items-center justify-between p-5 border-b border-primary">
          <h1 className="text-2xl font-bold text-secondary">Add Movie</h1>
          <div
            className="close_modal flex-center rounded-full border botder-primary w-6 h-6 text-secondary font-extrabold cursor-pointer hover:text-destructive"
            onClick={() => setIsModalOpen(false)}
          >
            X
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-sm font-semibold text-secondary"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              defaultValue={movie?.title || ""}
              placeholder="e.g. Inception"
              required
              className="bg-black/40 border border-primary rounded-lg px-4 py-3 text-secondary outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="director"
              className="text-sm font-semibold text-secondary"
            >
              Director
            </label>
            <input
              id="director"
              name="director"
              defaultValue={movie?.director || ""}
              placeholder="e.g. Christopher Nolan"
              required
              className="bg-black/40 border border-primary rounded-lg px-4 py-3 text-secondary outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="genre"
              className="text-sm font-semibold text-secondary"
            >
              Genre
            </label>
            <select
              id="genre"
              name="genre"
              defaultValue={movie?.genres[0] || ""}
              required
              className="bg-black/40 border border-primary rounded-lg px-4 py-3 text-secondary outline-none"
            >
              <option value="">Select Genre</option>
              <option value="Drama">Drama</option>
              <option value="Action">Action</option>
              <option value="Biography">Biography</option>
              <option value="Animation">Animation</option>
              <option value="Comedy">Comedy</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="year"
              className="text-sm font-semibold text-secondary"
            >
              Release Year
            </label>
            <input
              id="year"
              name="year"
              type="number"
              defaultValue={movie?.date || ""}
              placeholder="2024"
              required
              className="bg-black/40 border border-primary rounded-lg px-4 py-3 text-secondary outline-none"
            />
          </div>

          <div className="flex flex-col gap-2 col-span-2">
            <label
              htmlFor="actors"
              className="text-sm font-semibold text-secondary"
            >
              Lead Actors
            </label>
            <input
              id="actors"
              name="actors"
              defaultValue={movie?.actors?.join(", ") || ""}
              placeholder="Comma separated list"
              className="bg-black/40 border border-primary rounded-lg px-4 py-3 text-secondary outline-none"
            />
          </div>

          <div className="flex flex-col gap-2 col-span-2">
            <label
              htmlFor="description"
              className="text-sm font-semibold text-secondary"
            >
              Synopsis
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={movie?.plot || ""}
              placeholder="Brief summary of the plot..."
              required
              rows="5"
              className="bg-black/40 border border-primary rounded-lg px-4 py-3 text-secondary outline-none resize-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="image"
              className="text-sm font-semibold text-secondary"
            >
              Poster Image URL
            </label>
            <input
              id="image"
              name="image"
              defaultValue={movie?.image.url || ""}
              placeholder="https://"
              required
              className="bg-black/40 border border-primary rounded-lg px-4 py-3 text-secondary outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="trailer"
              className="text-sm font-semibold text-secondary"
            >
              Trailer URL
            </label>
            <input
              id="trailer"
              name="trailer"
              defaultValue={movie?.trailerUrl || ""}
              placeholder="https://"
              className="bg-black/40 border border-primary rounded-lg px-4 py-3 text-secondary outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="rating"
              className="text-sm font-semibold text-secondary"
            >
              Personal Rating
            </label>
            <input
              id="rating"
              name="rating"
              type="number"
              min="1"
              max="10"
              step="0.1"
              defaultValue={movie?.rate.aggregaterate || 1}
              required
              className="bg-black/40 border border-primary rounded-lg px-4 py-3 text-secondary outline-none"
            />
          </div>

          <div className="col-span-2 flex justify-end gap-4 border-t border-primary pt-5">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-2 rounded-lg text-secondary"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-red-600 px-6 py-2 rounded-lg text-white font-bold hover:bg-red-500 transition"
            >
              {type === "add" ? "Save Movie" : "Update Movie"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieFormModal;
