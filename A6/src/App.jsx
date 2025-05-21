import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./Context/index.jsx";
import HomeView from "./Views/HomeView.jsx";
import RegisterView from "./Views/RegisterView.jsx";
import LoginView from "./Views/LoginView.jsx";
import MovieView from "./Views/MovieView.jsx";
import DetailView from "./Views/DetailView.jsx";
import GenreView from "./Views/GenreView.jsx";
import ErrorView from "./Views/ErrorView.jsx";
import SettingsView from "./Views/SettingsView.jsx";
import SearchView from "./Views/SearchView.jsx";
import CartView from "./Views/CartView.jsx";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/movies" element={<MovieView />}>
            <Route path="genre/:genre_id" element={<GenreView />} />
            <Route path="details/:id" element={<DetailView />} />
            <Route path="search" element={<SearchView />} />
          </Route>
          <Route path="/settings" element={<SettingsView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="*" element={<ErrorView />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App;