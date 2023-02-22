import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from 'helpers/routes';

// import { Layout } from 'layout/Layout/Layout';
// import { HomePage } from 'pages/Home/Home';
// import { MoviesPage } from 'pages/Movies/Movies';
// import { MovieDetailsPage } from 'pages/MovieDetails/MovieDetails';
import { Cast, Review } from '../index';

const HomePage = lazy(() => import('pages/Home/Home'));
const MoviesPage = lazy(() => import('pages/Movies/Movies'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Layout = lazy(() => import('layout/Layout/Layout'));

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
