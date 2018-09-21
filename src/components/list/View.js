import React from 'react'
import Pager from '../pager/Hoc';

const View = ({ movies, message }) => (
    <div>
        { message && <span>{message}</span> }
        
        <ul>
            {movies.length > 0 && movies.map((movie, index) => (
                <li key={index}>{movie.Title}</li>
            ))}
        </ul>
        
        <Pager />
    </div>
)

export default View