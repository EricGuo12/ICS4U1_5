import { Link } from "react-router-dom";
import "./HomeView.css";

function HomeView() {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <header>
        <div className="buttons">
          <Link to={`/register`} className="button">Register</Link>
          <Link to={`/login`} className="button">Login</Link>
        </div>
      </header>
    </div>
  )
}

export default HomeView; 