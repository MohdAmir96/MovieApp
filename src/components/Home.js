import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const apiKey = 'b3e42f02'
    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`);
            setSearchResults(response.data.Search || []);
            setErrorMessage('');
        } catch (error) {
            setSearchResults([]);
            setErrorMessage('Error searching for movies');
        }
    };

    return (
        <div className="home-container">
            <h2>Movies App</h2>
            <hr />
            <div className="search-container">
                <h3>Search For Movies By Their Title</h3>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search Now!</button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {searchResults.length > 0 ? <h2>Movie Results For `{searchTerm}`</h2> : null}
            <div className="results-container">
                {searchResults.map((movie) => (
                        <div key={movie.imdbID} className="movie-card">
                            <img src={movie.Poster} alt={movie.Title} />
                            <div className="movie-details">
                                <h3><span>Title: </span>{movie.Title}</h3>
                                <h3><span>Type: </span>{movie.Type}</h3>
                                <h3><span>Year:</span>{movie.Year}</h3>
                                <Link to={`/movies/${movie.imdbID}`}  className="movie-link">
                                    <button className='knowMoreBtn'>Know More</button>
                                </Link>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
