import React from 'react';
import { Link } from "react-router-dom";
import Switch from '../bookmarks/Switch';

const View = ({ movie }) => (
  <li>
      <Link to={`/${movie.imdbID}`}>
          {movie.Title}
      </Link>
      <Switch movie={movie} />
  </li>
)

export default View