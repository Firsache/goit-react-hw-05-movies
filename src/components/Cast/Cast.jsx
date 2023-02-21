import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInfo } from 'services/api';
import { Loader } from '../index';
import defaultActor from '../../img/defaultPerson.jpeg';

export const Cast = () => {
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
        <ul>
          {castInfo.map(({ id, original_name, profile_path, character }) => {
            let path = profile_path
              ? 'https://image.tmdb.org/t/p/w300' + profile_path
              : defaultActor;

            return (
              <li key={id}>
                <img src={path} alt={original_name} />
                <p>{original_name}</p>
                <p>{character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
