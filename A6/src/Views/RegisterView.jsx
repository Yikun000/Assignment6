import { useNavigate } from "react-router-dom";
import "./RegisterView.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useState } from "react";
import { useStoreContext } from "../Context";

function Register() {
  const {
    setFirst,
    setLast,
    setEmail,
    setPassword,
    setSelected,
    setLoggedIn,
  } = useStoreContext();

  const navigate = useNavigate();

  const firstName = useRef('');
  const lastName = useRef('');
  const email = useRef('');
  const password = useRef('');
  const confirmedPassword = useRef('');
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genres = [
    "Sci-Fi", "Thriller", "Adventure", "Family", "Animation",
    "Action", "History", "Fantasy", "Horror", "Comedy"
  ];

  const handleGenreChange = (e) => {
    const { value, checked } = e.target;
    setSelectedGenres(prev => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter(g => g !== value);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedGenres.length < 5) {
      alert("Please select at least 5 genres.");
      return;
    }

    if (confirmedPassword.current.value !== password.current.value) {
      alert("Your passwords don't match!");
      return;
    }

    setFirst(firstName.current.value);
    setLast(lastName.current.value);
    setEmail(email.current.value);
    setPassword(password.current.value);
    setSelected(selectedGenres);
    setLoggedIn(true);

    navigate('/movies');
  };

  return (
    <div className="register-view">
      <Header />
      <div className="register-container">
        <div className="register-box">
          <h2>Register to Continue</h2>
          <form onSubmit={handleSubmit}>
            <div className="register-group">
              <input type="text" placeholder="First Name" ref={firstName} required />
            </div>
            <div className="register-group">
              <input type="text" placeholder="Last Name" ref={lastName} required />
            </div>
            <div className="register-group">
              <input type="email" placeholder="Email" ref={email} required />
            </div>
            <div className="register-group">
              <input type="password" placeholder="Password" ref={password} required />
            </div>
            <div className="register-group">
              <input type="password" placeholder="Re-enter Password" ref={confirmedPassword} required />
            </div>
            <div className="genre-select">
              <h3>Select at least 5 Genres</h3>
              {genres.map(genre => (
                <div className="genre-select-group" key={genre}>
                  <input
                    type="checkbox"
                    id={genre}
                    name={genre}
                    value={genre}
                    onChange={handleGenreChange}
                    checked={selectedGenres.includes(genre)}
                  />
                  <label htmlFor={genre}>{genre}</label>
                </div>
              ))}
            </div>
            <button type="submit" className="register-button" disabled={selectedGenres.length < 5}>
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
