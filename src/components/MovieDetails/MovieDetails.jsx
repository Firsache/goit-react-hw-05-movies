import { useEffect, useState } from 'react';
import { getDetailedFilmInfo } from 'services/api';

export const MovieDetailsPage = ({ id }) => {
  const [detailedInfo, setDetailedInfo] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // if (!searchedQuery) return;
    async function getDetailedInfo() {
      try {
        setIsLoading(true);

        const { results } = await getDetailedFilmInfo(id);
        setDetailedInfo(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getDetailedInfo();
  }, []);

  return (
    <>
      {error && <div>Try to reload the page</div>}
      {isLoading && <div>Loading</div>}
    </>
  );
};
