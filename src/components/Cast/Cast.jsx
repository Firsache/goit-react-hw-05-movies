import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastInfo } from 'services/api';

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

        const cast = await getCastInfo(movieId);
        console.log(cast);

        setCastInfo(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getApiCastInfo();
  }, [movieId]);

  // const { original_name, profile_path, character } = castInfo;

  return (
    <>
      {error && <div>Try to reload the page</div>}
      {isLoading && <div>Loading</div>}
      {castInfo && (
        <p>
          Cast is here
          {/* <img src={profile_path} alt={original_name} />
          <p>{original_name}</p>
          <p>{character}</p> */}
        </p>
      )}
    </>
  );
};
