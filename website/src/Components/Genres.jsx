import { useNavigate } from "react-router-dom";

function Genres(props) {
  const navigate = useNavigate();
  console.log(props.genresList);

  const handleClick = (genreId) => {
    navigate(`/movies/genre/${genreId}`);
  };

  return (
    <div className="genres-container">
      {props.genresList.map((item) => (
        <button
          key={item.id}
          className="genre-button"
          onClick={() => handleClick(item.id)}
        >
          {item.genre}
        </button>
      ))}
    </div>
  );
}
export default Genres;
