import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import "./DetailView.css";

function DetailView() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            import.meta.env.VITE_TMDB_KEY
          }`
        );
        setMovie(movieResponse.data);

        const videosResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
            import.meta.env.VITE_TMDB_KEY
          }`
        );
        setTrailers(
          videosResponse.data.results.filter(
            (video) => video.type === "Trailer"
          )
        );
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="detail-view-container">
      <div>
        <h1>{movie.title}</h1>
        <p className="detail-info">
          <span>Tagline:</span> {movie.tagline}
        </p>

        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.original_title}
          className="detail-view-poster"
        />
        <p className="detail-info">
          <span>Language:</span> {movie.original_language}
        </p>
        <p className="detail-info">
          <span>Overview:</span> {movie.overview}
        </p>
        <p className="detail-info">
          <span>Country:</span> {movie.origin_country}
        </p>

        <p className="detail-info">
          <span>Runtime:</span> {movie.runtime} minutes
        </p>
        <p className="detail-info">
          <span>Release Date:</span> {movie.release_date}
        </p>
        <p className="detail-info">
          <span>Rating:</span> {movie.vote_average}
        </p>
        <p className="detail-info">
          <span>Genres:</span> {movie.genres.map((g) => g.name).join(", ")}
        </p>
        <p className="detail-info">
          <span>Box Office:</span> {movie.revenue.toLocaleString()}$
        </p>
      </div>

      <div className="trailers-grid">
        {trailers.length > 0 ? (
          trailers.map((trailer) => (
            <div key={trailer.id} className="trailer-tile">
              <a
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="trailer-thumbnail"
                  src={`https://img.youtube.com/vi/${trailer.key}/0.jpg`}
                  alt={trailer.name}
                />
                <h3>{trailer.name}</h3>
              </a>
            </div>
          ))
        ) : (
          <p>No trailers available.</p>
        )}
      </div>
    </div>
  );
}

export default DetailView;
