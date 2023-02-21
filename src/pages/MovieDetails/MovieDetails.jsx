import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailedFilmInfo } from 'services/api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

export const MovieDetailsPage = () => {
  const [detailedInfo, setDetailedInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === null) return;

    async function getDetailedInfo() {
      try {
        setIsLoading(true);

        const data = await getDetailedFilmInfo(movieId);
        setDetailedInfo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getDetailedInfo();
  }, [movieId]);

  return (
    <>
      {error && <div>Try to reload the page</div>}
      {isLoading && <div>Loading</div>}
      {detailedInfo && <MovieInfo detailedInfo={detailedInfo} />}
    </>
  );
};
