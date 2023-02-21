import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { getFilmByQuery } from 'services/api';
import { routes } from 'helpers/routes';

import { Form, Loader } from '../../components/index';

export const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  // const [searchedQuery, setSearchedQuery] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const querySearched = searchParams.get('query');

  useEffect(() => {
    if (!querySearched) return;
    async function getFilms() {
      try {
        setIsLoading(true);

        const { results } = await getFilmByQuery(querySearched);
        setSearchedMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getFilms();
  }, [querySearched]);

  const handleOnSubmit = value => {
    setSearchParams({ query: value });
    // setSearchedQuery(value);
  };

  return (
    <>
      {error && <div>Try to reload the page</div>}
      {isLoading && <Loader />}
      <Form onSubmit={handleOnSubmit} />
      {searchedMovies && (
        <ul>
          {searchedMovies.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={routes.MOVIE_DETAILS_PATH(id)}>
                <h3>{original_title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
