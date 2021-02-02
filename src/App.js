import React, { Suspense, lazy } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import routes from './routes';
import './App.css';

//pages
const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage'),
);

const linkStyles = {
  base: {
    color: 'black',
  },
  active: {
    color: 'red',
  },
};

function App() {
  return (
    <div className="App">
      <ul className="navigation-list">
        <li>
          <NavLink
            style={linkStyles.base}
            activeStyle={linkStyles.active}
            exact
            to={routes.home}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={linkStyles.base}
            activeStyle={linkStyles.active}
            to={routes.movies}
          >
            Movies
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={<p>Loading....</p>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
