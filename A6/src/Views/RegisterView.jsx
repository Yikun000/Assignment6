import { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterView.css";
import Header from "../Components/Header";

// Create a UserContext to store the user's data
const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export default function RegisterView() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  
  // Movie genres list for checkboxes (replace with actual genres from Assignment 5)
  const movieGenres = [
    "Action", "Comedy", "Drama", "Horror", "Romance", "Sci-Fi", "Thriller", "Animation", "Documentary"
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    selectedGenres: [],
  });
  
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "selectedGenres") {
      const selectedGenres = [...formData.selectedGenres];
      if (selectedGenres.includes(value)) {
        selectedGenres.splice(selectedGenres.indexOf(value), 1);
      } else {
        selectedGenres.push(value);
      }
      setFormData({ ...formData, selectedGenres });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.selectedGenres.length < 5) {
      setError("Please select at least 5 genres.");
      return;
    }

    setError("");
    setUser(formData); // Store user information in context
    alert("Registration successful!");
    navigate(`/movies/genre/${formData.selectedGenres[0]}`); // Redirect to the first genre
  };

  return (
    <>
      <Header />
      <div className="register-container">
        <div className="register-form">
          <h2 className="register-title">Register</h2>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-input"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-input"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-input"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-input"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Select Movie Genres</label>
              <div className="checkbox-group">
                {movieGenres.map((genre) => (
                  <label key={genre}>
                    <input
                      type="checkbox"
                      name="selectedGenres"
                      value={genre}
                      checked={formData.selectedGenres.includes(genre)}
                      onChange={handleChange}
                    />
                    {genre}
                  </label>
                ))}
              </div>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
