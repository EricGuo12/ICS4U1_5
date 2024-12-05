import { Link } from "react-router-dom";
import "./Header.css";
import netCafeLogo from "../assets/netcafelogo2.png";

function Header() {
  return (
    <nav>
      <img src={netCafeLogo} alt="Net Cafe Logo" className="image1" />

      <div className="nav-items">
        <p className="logo">NET CAFE</p>
        <button>
          <Link to="/register" className="btn-link">
            <a href="/">register</a>
          </Link>
        </button>
        <button>
          <Link to="/login" className="btn-link">
            <a href="/">login</a>
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default Header;
