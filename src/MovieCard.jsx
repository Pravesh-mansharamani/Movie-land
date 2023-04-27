import React from "react";

const MovieCard = ({ Movie }) => {
    return (
        <div className="movie">
            <div>
                <p>{Movie.Year}</p>
            </div>

            <div>
                <img src={Movie.Poster !== 'N/A' ? Movie.Poster : 'https://via.placeholder.com/400'} alt={Movie.Title}/>
            </div>

            <div>
                <sapn>{Movie.Type}</sapn>
                <h3>{Movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard