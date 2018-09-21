import React, { Component } from 'react'
import { withRouter } from 'react-router';

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
      <div>

        { message && <span>{message}</span> }

        { movie && 
          <div>
            <a onClick={this.props.history.goBack}>Back</a>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster}
              alt={movie.Title} />
          </div>
        }
        
      </div>
    )

  }

}

export default withRouter(View)