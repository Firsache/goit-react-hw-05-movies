import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from 'helpers/routes';

import { Layout } from 'layout/Layout/Layout';
import { HomePage } from 'components/Home/Home';
import { MoviesPage } from 'components/Movies/Movies';
import { MovieDetailsPage } from 'components/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Review } from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.MOVIES} element={<MoviesPage />} />
        <Route path={routes.MOVIE_DETAILS} element={<MovieDetailsPage />}>
          <Route path={routes.CAST} element={<Cast />} />
          <Route path={routes.REVIEWS} element={<Review />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={routes.HOME} />} />
    </Routes>
  );
};