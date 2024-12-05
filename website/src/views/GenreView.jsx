import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./GenreView.css";

function GenreView() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
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
    if (id === null) return;

    async function getMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_TMDB_KEY
        }&with_genres=${id}&page=${page}`
      );
      console.log(response);

      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    }

    getMovies();
  }, [id, page]);

  function nextPage() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  function previousPage() {
    if (page != 1) {
      setPage(page - 1);
    }
  }

  function loadMovie(id) {
    navigate(`/movie/details/${id}`);
  }

  return (
    <div className="genre-list-container">
      <p className="page-title">{genreName}</p>

      <div className="movie-list">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-item"
            onClick={() => {
              loadMovie(movie.id);
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h className="movie-title">{movie.title}</h>
          </div>
        ))}
      </div>
      {page < totalPages && (
        <div className="genre-buttons">
          <button className="page-button" onClick={previousPage}>
            Previous Page
          </button>
          <button className="page-button" onClick={nextPage}>
            Next Page
          </button>
        </div>
      )}
      <p className="page">
        Page: {page}/{totalPages}
      </p>
    </div>
  );
}
export default GenreView;
