import React, { Component } from 'react';
import API from '../../services/movieAPI';

//components
import SearchFrom from '../../components/SearchForm';
import MoviesList from '../../components/MoviesList';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  componentDidUpdate() {
    const { query } = this.state;
    if (query !== '') {
      this.searchMovies();
    }
  }

  async searchMovies() {
    const { query } = this.state;
    API.searchMovies(query).then(res => this.setState({ movies: res }));
  }

  onChangeQuery = query => {
    this.setState({ query: query, movies: [] });
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <SearchFrom onSubmit={this.onChangeQuery} />
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default MoviesPage;
