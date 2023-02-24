import { useEffect } from 'react';
import { useState } from 'react';

import { getTrendingFilms } from 'services/api';

import { Loader, MovieList } from 'components/index';

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
      {Boolean(trendingMovies.length) && <MovieList array={trendingMovies} />}
    </>
  );
};

export default HomePage;
