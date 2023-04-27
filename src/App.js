import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=e4e3f7c9';

const App = () => {

    const [Movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('godfather');
    
    }, []);

    return (
        <div className="app">
            <h1>Movie Land</h1>
            <p>Your onestop location for searching Movies!</p>

            <div className="search">
                <input 
                placeholder="Search for Movies"
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value)}}
                />
                <img 
                src={SearchIcon}
                alt="Search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                Movies?.length > 0
                  ? (
                    <div className="container">
                        {Movies.map((Movie) => (
                            <MovieCard Movie={Movie}/>
                        ))}
                    </div>
                  ) : (
                    <div className="empty">
                        <h2>No Movies found</h2>
                    </div>
                  )
            }
        </div>
        
    );
}


export default App;
