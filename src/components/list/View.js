import React from 'react'
import Pager from '../pager/Hoc';
import Movie from '../item/Hoc'

const View = ({ movies, message }) => (
    <div>
        { message && <span>{message}</span> }
        
        <ul className="list">
            {movies.length > 0 && movies.map((movie, index) => (
                <Movie key={index} movie={movie} />
            ))}
        </ul>
        
        <Pager />
    </div>
)

export default View