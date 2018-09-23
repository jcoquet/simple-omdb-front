import React, { Component } from 'react'
import { withRouter } from 'react-router';
import Switch from '../bookmarks/Switch'

class View extends Component {

  componentWillUnmount() {
    this.props.unsetCurrentMovie();
  }

  componentDidMount() {
    this.props.fetchMovieById(this.props.movieId);
  }

  render() {

    const { movie, message } = this.props;

    return (
      <div className="single">

        { message && <span>{message}</span> }

        { movie && 
          <div>
            <a className="secondary" onClick={this.props.history.goBack}>Back</a>
            <div className="wrap">
              
              <h1>{movie.Title}</h1>
              
              { movie.Poster !== 'N/A' &&
              <img src={movie.Poster}
                alt={movie.Title} />
              }

              { movie.Plot !== 'N/A' &&
                <p>{movie.Plot}</p>
              }

              <Switch movie={movie} />

              </div>
          </div>
        }
        
      </div>
    )

  }

}

export default withRouter(View)