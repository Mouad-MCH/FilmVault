const TrailerModal = ({ trailerUrl, onClose }) => {
    
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center z-50">
      
      <div className="relative w-[800px] h-[450px] bg-black rounded-lg overflow-hidden">
        
        <button
          className="absolute top-3 right-3 text-white text-xl z-10"
          onClick={onClose}
        >
          ✕
        </button>

        <iframe
          className="w-full h-full"
          src={trailerUrl.replace("watch?v=", "embed/")}
          title="Trailer"
          allowFullScreen
        />
      </div>

    </div>
  );
};

export default TrailerModal;