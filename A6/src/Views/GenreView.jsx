import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./GenreView.css";
import { useStoreContext } from "../Context";

const genres = [
    { genre: "Sci-Fi", id: 878 },
    { genre: "Thriller", id: 53 },
    { genre: "Adventure", id: 12 },
    { genre: "Family", id: 10751 },
    { genre: "Animation", id: 16 },
    { genre: "Action", id: 28 },
    { genre: "History", id: 36 },
    { genre: "Fantasy", id: 14 },
    { genre: "Horror", id: 27 },
    { genre: "Comedy", id: 35 }
];

function GenreView() {
    const { genre_id } = useParams();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const { cart, setCart } = useStoreContext();
    const selectedGenre = genres.find(genre => genre.id === parseInt(genre_id));
    const genreName = selectedGenre ? selectedGenre.genre : "Movies in Genre";

    const handleAddToCart = (movie) => {
        setCart(prevCart => {
            const newCart = new Map(prevCart);
            newCart.set(movie.id, movie);
            return newCart;
        });
    };

    const handleRemoveFromCart = (movieId) => {
        setCart(prevCart => {
            const newCart = new Map(prevCart);
            newCart.delete(movieId);
            return newCart;
        });
    };

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${genre_id}&page=${page}`
                );
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        }
        fetchMovies();
    }, [genre_id, page]);

    return (
        <div className="hero">
            <h2>{genreName}</h2>
            <div className="genre-view-container">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className="genre-view-item">
                            <Link to={`/movies/details/${movie.id}`}>
                                {movie.poster_path ? (
                                    <img 
                                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                                        alt={movie.title} 
                                        className="genre-view-image" 
                                    />
                                ) : (
                                    <div className="no-image">No Image Available</div>
                                )}
                            </Link>
                            <h3 className="movie-title">{movie.title}</h3>
                            {cart.has(movie.id) ? (
                                <button 
                                    className="cart-button added"
                                    onClick={() => handleRemoveFromCart(movie.id)}
                                >
                                    Added
                                </button>
                            ) : (
                                <button 
                                    className="cart-button"
                                    onClick={() => handleAddToCart(movie)}
                                >
                                    Buy
                                </button>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No movies available for this genre.</p>
                )}
            </div>
            <div className="genre-view-pagination-container">
                <button className="genre-view-pagination-button" onClick={() => setPage((p) => Math.max(p - 1, 1))}> Prev </button>
                <button className="genre-view-pagination-button" onClick={() => setPage((p) => p + 1)}> Next </button>
            </div>
        </div>
    );
}

export default GenreView;