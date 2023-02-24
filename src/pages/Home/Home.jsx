import { useEffect } from 'react';
import { useState } from 'react';

import { getTrendingFilms } from 'services/api';

import { Box, Loader, MovieList } from 'components/index';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      {trendingMovies.length > 0 && (
        <Box m="0 auto" maxWidth={1200} mt={32}>
          <MovieList array={trendingMovies} />
        </Box>
      )}
    </>
  );
};

export default HomePage;
