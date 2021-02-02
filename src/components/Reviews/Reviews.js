import React, { Component } from 'react';
import API from '../../services/movieAPI';
import './Reviews.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    await API.searchMoviesReviews(this.props.match.params.movieId).then(res =>
      this.setState({ reviews: res.data.results }),
    );
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length !== 0 ? (
          <ul>
            {reviews.map(({ author, content, id }) => (
              <li className="Reviews__content" key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don`t have any reviews for this movie.</p>
        )}
      </>
    );
  }
}

export default Reviews;
