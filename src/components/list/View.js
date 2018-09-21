import React from 'react'
import Pager from '../pager/Hoc';
import { Link } from "react-router-dom";

const View = ({ movies, message }) => (
    <div>
        { message && <span>{message}</span> }
        
        <ul>
            {movies.length > 0 && movies.map((movie, index) => (
                <li key={index}>
                    <Link to={`/${movie.imdbID}`}>
                        {movie.Title}
                    </Link>
                </li>
            ))}
        </ul>
        
        <Pager />
    </div>
)

export default View