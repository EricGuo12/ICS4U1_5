import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context";
import HomeView from "../src/views/HomeView";
import RegisterView from "../src/views/RegisterView";
import LoginView from "../src/views/LoginView";
import MoviesView from "../src/views/MoviesView";
import GenreView from "../src/views/GenreView";
import DetailView from "./views/DetailView";
import "./App.css";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/movies" element={<MoviesView />}>
            <Route path="genre/:id" element={<GenreView />} />
            <Route path="details/:id" element={<DetailView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}
export default App;
