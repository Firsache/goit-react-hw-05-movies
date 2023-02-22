import { useEffect, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

import { getDetailedFilmInfo } from 'services/api';
import { routes } from 'helpers/routes';
import { MovieInfo, Loader } from 'components/index';

const MovieDetailsPage = () => {
  const [detailedInfo, setDetailedInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

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
      {isLoading && <Loader />}
      <Link to={location.state?.from ?? routes.HOME}>Go back</Link>
      {detailedInfo && <MovieInfo detailedInfo={detailedInfo} />}
    </>
  );
};

export default MovieDetailsPage;
