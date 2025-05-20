import { Outlet } from "react-router-dom";
import Genres from "../Components/Genres.jsx";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import "./MoviesView.css";

function MoviesView() {
    return (
        <>
            <Header />
            <div className="movies-view-container">
                <aside className="genres-sidebar">
                    <h1 className="genres-title">Genres:</h1>
                    <Genres />
                </aside>
                <main className="movies-main-content">
                    <Outlet /> 
                </main>
            </div>
            <Footer />
        </>
    );
}

export default MoviesView;