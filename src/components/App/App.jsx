import { useEffect } from 'react';
import { useState } from 'react';
import { getTrendingFilms } from 'services/api';

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // if (!trendingMovies) return;
    async function getFilms() {
      try {
        setIsLoading(true);

        const { results } = await getTrendingFilms();
        console.log(results);
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
      {isLoading && <div>Loading</div>}
      <ul>
        {trendingMovies.map(({ id, title }) => (
          <li key={id}>
            <h3>{title}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};
