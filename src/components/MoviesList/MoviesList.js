import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './MoviesList.css';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className="MoviesList">
      {movies.map(({ id, title, name, poster_path }) => (
        <li className="MoviesList-item" key={id}>
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              className="MoviesList-item__img"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            />

            <p>{!title ? name : title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
