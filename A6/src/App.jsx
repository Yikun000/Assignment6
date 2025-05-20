import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./Views/HomeView";
import MoviesView from "./Views/MoviesView";
import MovieDetailView from "./Views/MovieDetailView";
import GenreView from "./Views/GenreView";
import LoginView from "./Views/LoginView";
import RegisterView from "./Views/RegisterView";
import ErrorView from "./Views/ErrorView";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/movies" element={<MoviesView />}>
                    <Route path="details/:id" element={<MovieDetailView />} />
                    <Route path=":genre_id" element={<GenreView />} />
                </Route>
                <Route path="/login" element={<LoginView />} />
                <Route path="/register" element={<RegisterView />} />
                <Route path="*" element={<ErrorView />} />
            </Routes>
        </Router>
    );
}

export default App;