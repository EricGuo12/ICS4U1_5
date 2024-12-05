import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./GenreView.css";

function GenreView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const genreNames = {
    28: "Action",
    10751: "Family",
    878: "Science Fiction",
    16: "Animation",
    35: "Comedy",
    14: "Fantasy",
    80: "Crime",
    99: "Documentary",
    53: "Thriller",
    27: "Horror",
  };

  const genreName = genreNames[id];

  useEffect(() => {
    if (!id) return;

    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_KEY
          }&with_genres=${id}&page=${page}`
        );
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [id, page]);

  const handlePageChange = (direction) => {
    if (direction === "next" && page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    } else if (direction === "prev" && page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const loadMovie = (movieId) => {
    navigate(`/movies/details/${movieId}`);
  };

  return (
    <div className="genre-list-container">
      <p className="page-title">{genreName}</p>

      <div className="movie-list">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-item"
            onClick={() => loadMovie(movie.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.title}</h3>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="genre-buttons">
          <button
            className="page-button"
            onClick={() => handlePageChange("prev")}
            disabled={page === 1}
          >
            Previous Page
          </button>
          <button
            className="page-button"
            onClick={() => handlePageChange("next")}
            disabled={page === totalPages}
          >
            Next Page
          </button>
        </div>
      )}

      <p className="page">
        Page: {page} / {totalPages}
      </p>
    </div>
  );
}

export default GenreView;
