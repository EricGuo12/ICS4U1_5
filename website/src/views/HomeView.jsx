import "./HomeView.css";
import "../Components/Header.jsx";
import "../Components/Hero.jsx";
import "../Components/Footer.jsx";

import Header from "../Components/Header";  // Corrected import path
import Hero from "../Components/Hero";  // Corrected import path
import Footer from "../Components/Footer";  // Corrected import path

function HomeView() {
  return (
    <div >
          <Header />
          <Hero />
          <Footer />
    </div>
  )
}

export default HomeView; 