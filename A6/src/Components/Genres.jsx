import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Genres.css";

function Genres() {
    const [genres, setGenres] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/genre/movie/list`, {
                params: { api_key: import.meta.env.VITE_TMDB_KEY },
            })
            .then((response) => {
                setGenres(
                    response.data.genres.filter((genre) =>
                        [28, 12, 16, 80, 10751, 14, 36, 27, 9648, 878, 10752, 37].includes(genre.id)
                    )
                );
            })
            .catch((error) => console.error("Error fetching genres:", error));
    }, []);

    return (
        <div className="genres-container">
            {genres.length ? (
                <ul className="genres-list">
                    {genres.map((genre) => (
                        <li key={genre.id}>
                            <button
                                className="genre-button"
                                onClick={() => navigate(`/movies/${genre.id}`)}
                            >
                                {genre.name}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No genres available. Please try again later.</p>
            )}
        </div>
    );
}

export default Genres;