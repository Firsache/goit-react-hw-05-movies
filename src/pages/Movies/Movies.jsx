import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { getFilmByQuery } from 'services/api';
import { routes } from 'helpers/routes';

import { Box, Form, Loader } from 'components/index';
import { List } from 'pages/Home/Home.styled';

const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
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
  };

  return (
    <>
      {error && <div>Try to reload the page</div>}
      {isLoading && <Loader />}
      <Form onSubmit={handleOnSubmit} />
      {searchedMovies && (
        <Box m="0 auto" maxWidth={1200} mt={32}>
          <List>
            {searchedMovies.map(({ id, original_title }) => (
              <li key={id}>
                <Link
                  state={{ from: location }}
                  to={routes.MOVIE_DETAILS_PATH(id)}
                >
                  <h3>{original_title}</h3>
                </Link>
              </li>
            ))}
          </List>
        </Box>
      )}
    </>
  );
};

export default MoviesPage;