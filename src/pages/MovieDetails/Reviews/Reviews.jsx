import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsInfo } from 'services/api';
import { Loader } from 'components/index';

import { ReviewList, ReviewItem } from './Review.styled';

const Review = () => {
  const [reviewInfo, setReviewInfo] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === null) return;

    async function getApiReviewInfo() {
      try {
        setIsLoading(true);

        const array = await getReviewsInfo(movieId);

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
      {isLoading && <Loader />}
      {reviewInfo && (
        <ReviewList>
          {reviewInfo.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </ReviewItem>
          ))}
        </ReviewList>
      )}
      {reviewInfo.length === 0 && (
        <div>There aren't any reviews for this movie.</div>
      )}
    </>
  );
};

export default Review;
