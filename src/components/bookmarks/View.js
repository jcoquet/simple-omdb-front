import React, { Component } from 'react'
import Movie from '../item/Hoc'

class View extends Component {

    render() {
        return (
            <div className="wrap">
                <ul className="list">
                    {this.props.movies.length > 0 && this.props.movies.map((movie, index) => (
                        <Movie key={index} movie={movie} />
                    ))}
                    {this.props.movies.length === 0 &&
                        'No bookmarks yet' }                    
                </ul>
            </div>
        )
    }
}

export default View