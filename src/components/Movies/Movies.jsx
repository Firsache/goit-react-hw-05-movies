import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFilmByQuery } from 'services/api';
import { Form } from 'components/Form/Form';
import { routes } from 'helpers/routes';

export const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchedQuery, setSearchedQuery] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchedQuery) return;
    async function getFilms() {
      try {
        setIsLoading(true);

        const { results } = await getFilmByQuery(searchedQuery);
        setSearchedMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getFilms();
  }, [searchedQuery]);

  const handleOnSubmit = value => {
    setSearchedQuery(value);
  };

  return (
    <>
      {error && <div>Try to reload the page</div>}
      {isLoading && <div>Loading</div>}
      <Form onSubmit={handleOnSubmit} />
      {searchedMovies && (
        <ul>
          {searchedMovies.map(({ id, original_title }) => (
            <li key={id}>
              {/* <Link to={`movies/${id}`}>
                <h3>{original_title}</h3>
              </Link> */}
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
