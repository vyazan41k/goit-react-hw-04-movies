import React, { Component } from 'react';
import API from '../../services/movieAPI';
import './Cast.css';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    await API.searchMoviesCredits(this.props.match.params.movieId).then(res =>
      this.setState({ cast: res.data.cast }),
    );
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        <ul className="Cast">
          {cast.map(({ character, name, profile_path, cast_id }) => (
            <li className="Cast-link" key={cast_id}>
              {/*  eslint-disable-next-line jsx-a11y/alt-text */}
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                width="100px"
              />{' '}
              <br />
              {name}
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
