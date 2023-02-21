import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsInfo } from 'services/api';

export const Review = () => {
  const [reviewInfo, setReviewInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === null) return;

    async function getApiReviewInfo() {
      try {
        setIsLoading(true);

        const array = await getReviewsInfo(movieId);
        console.log(array);

        setReviewInfo(array);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getApiReviewInfo();
  }, [movieId]);

  return (
    <>
      {error && <div>Try to reload the page</div>}
      {isLoading && <div>Loading</div>}
      {reviewInfo && (
        <p>
          Review is here
          {/* <p>Authot: {author}</p>
          <p>{content}</p> */}
        </p>
      )}
    </>
  );
};
