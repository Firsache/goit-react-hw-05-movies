import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from 'helpers/routes';

import { Layout } from 'layout/Layout/Layout';
import { Loader } from 'components';

const HomePage = lazy(() => import('pages/Home/Home'));
const MoviesPage = lazy(() => import('pages/Movies/Movies'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('pages/MovieDetails/Cast/Cast'));
const Review = lazy(() => import('pages/MovieDetails/Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
};
