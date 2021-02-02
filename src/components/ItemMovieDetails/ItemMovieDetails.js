import React from 'react';
import './ItemMovieDetails.css';

const ItemMovieDetails = ({
  posterPath,
  originalTitle,
  overview,
  genres,
  releaseDate,
  popularity,
}) => {
  return (
    <div className="ItemMovieDetails">
      <div className="MovieImage">
        {/*  eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} />
      </div>
      <div className="MovieDisc">
        <h2 className="MovieDisc__Title">
          {`${originalTitle} (${releaseDate})`}
        </h2>
        <p className="MovieDisc__Score">User Score: {popularity}</p>
        <div className="MovieDisc__Overview">
          <h2 className="MovieDisc__Overview__Title">Overview</h2>
          <p className="MovieDisc__Overview__Text">{overview}</p>
        </div>
        {genres && (
          <div className="MovieDisc__Genres">
            <h2 className="MovieDisc__Genres__Title">Genres</h2>
            <div className="MovieDisc__Genres__Text">
              {genres.map(({ id, name }) => (
                <p key={id}>{name}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemMovieDetails;
