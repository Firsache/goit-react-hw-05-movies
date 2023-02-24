import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInfo } from 'services/api';
import { Loader } from 'components/index';

import { CastList, CastItem } from './Cast.styled';

const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === null) return;

    async function getApiCastInfo() {
      try {
        setIsLoading(true);

        const array = await getCastInfo(movieId);

        setCastInfo(array);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getApiCastInfo();
  }, [movieId]);

  return (
    <>
      {error && <div>Try to reload the page</div>}
      {isLoading && <Loader />}
      {castInfo && (
        <CastList>
          {castInfo.map(({ id, original_name, profile_path, character }) => {
            return (
              <CastItem key={id}>
                <img src={profile_path} alt={original_name} />
                <p>{original_name}</p>
                <p>{character}</p>
              </CastItem>
            );
          })}
        </CastList>
      )}
      {castInfo.length === 0 && (
        <div>There isn't any information about the movie cast.</div>
      )}
    </>
  );
};

export default Cast;
