import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getTrendingFilms } from 'services/api';
import { routes } from 'helpers/routes';
import { Box, Loader } from 'components/index';

import { List } from './Home.styled.js';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function getFilms() {
      try {
        setIsLoading(true);

        const { results } = await getTrendingFilms();
        setTrendingMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getFilms();
  }, []);

  return (
    <>
      {error && <div>Try to reload the page</div>}
      {isLoading && <Loader />}
      <Box m="0 auto" maxWidth={1200} mt={32}>
        <List>
          {trendingMovies.map(({ id, title }) => (
            <li key={id}>
              <Link
                state={{ from: location }}
                to={routes.MOVIE_DETAILS_PATH(id)}
              >
                <h3>{title}</h3>
              </Link>
            </li>
          ))}
        </List>
      </Box>
    </>
  );
};

export default HomePage;
