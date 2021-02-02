import React, { Component, Suspense, lazy } from 'react';
import API from '../../services/movieAPI';
import { Route, NavLink, Switch } from 'react-router-dom';
import './MovieDetailsPage.css';

// components
const ItemMovieDetails = lazy(() =>
  import('../../components/ItemMovieDetails/ItemMovieDetails'),
);
const Cast = lazy(() => import('../../components/Cast'));
const Reviews = lazy(() => import('../../components/Reviews'));

const linkStyles = {
  base: {
    color: 'black',
  },
  active: {
    color: 'red',
  },
};

class MovieDetailsPage extends Component {
  state = {};

  async componentDidMount() {
    await API.searchMoviesDetails(this.props.match.params.movieId).then(res =>
      this.setState({
        posterPath: res.data.poster_path,
        originalTitle: res.data.original_title,
        overview: res.data.overview,
        genres: res.data.genres,
        popularity: res.data.popularity,
        releaseDate: new Date(res.data.release_date).getFullYear(),
      }),
    );
  }

  goBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      history.push(location.state.from);
    }
  };

  render() {
    const {
      posterPath,
      originalTitle,
      overview,
      genres,
      releaseDate,
      popularity,
    } = this.state;

    return (
      <>
        <button type="button" onClick={this.goBack}>
          Go back
        </button>
        <Suspense fallback={<p>Loading....</p>}>
          <ItemMovieDetails
            posterPath={posterPath}
            originalTitle={originalTitle}
            releaseDate={releaseDate}
            overview={overview}
            genres={genres}
            popularity={popularity}
          />
        </Suspense>

        <div className="Additional__information">
          <h2>Additional information</h2>
          <ul className="MovieDetailsPage">
            <li className="MovieDetailsPage__link">
              <NavLink
                style={linkStyles.base}
                activeStyle={linkStyles.active}
                to={{
                  pathname: `${this.props.match.url}/cast`,
                  state: { from: this.props.location },
                }}
              >
                <button className="MovieDetailsPage__link-btn" type="button">
                  Cast
                </button>
              </NavLink>
            </li>
            <li className="MovieDetailsPage__link">
              <NavLink
                style={linkStyles.base}
                activeStyle={linkStyles.active}
                to={{
                  pathname: `${this.props.match.url}/reviews`,
                  state: { from: this.props.location },
                }}
              >
                <button className="MovieDetailsPage__link-btn" type="button">
                  Reviews
                </button>
              </NavLink>
            </li>
          </ul>
          <Suspense fallback={<p>Loading....</p>}>
            <Switch>
              <Route exact path="/movies/:movieId/cast" component={Cast} />
              <Route
                exact
                path="/movies/:movieId/reviews"
                component={Reviews}
              />
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
