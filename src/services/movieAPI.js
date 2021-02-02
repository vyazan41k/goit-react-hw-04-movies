import axios from 'axios';

const API_KEY = '027e37ec41231531e9ac26f8ecc98ec7';
const BASE_URL = 'https://api.themoviedb.org';

const trendingMovies = () => {
  return axios
    .get(`${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`)
    .then(res => res.data.results);
};

const searchMovies = query => {
  return axios
    .get(
      `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
    )
    .then(res => res.data.results);
};

const searchMoviesDetails = movieId => {
  return axios
    .get(`${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(res => res);
};

const searchMoviesCredits = movieId => {
  return axios
    .get(
      `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    )
    .then(res => res);
};

const searchMoviesReviews = movieId => {
  return axios
    .get(
      `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    )
    .then(res => res);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  trendingMovies,
  searchMovies,
  searchMoviesDetails,
  searchMoviesCredits,
  searchMoviesReviews,
};
