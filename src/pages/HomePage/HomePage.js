import React, { Component, Suspense, lazy } from 'react';
import API from '../../services/movieAPI';

//components
const MoviesList = lazy(() => import('../../components/MoviesList'));

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    API.trendingMovies().then(res => this.setState({ movies: res }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="HomePage">
        <Suspense fallback={<p>Loading....</p>}>
          <MoviesList movies={movies} />
        </Suspense>
      </div>
    );
  }
}

export default HomePage;
