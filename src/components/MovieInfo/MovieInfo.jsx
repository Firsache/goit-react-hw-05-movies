import { Link, Outlet } from 'react-router-dom';
import { routes } from 'helpers/routes';

export const MovieInfo = ({ detailedInfo }) => {
  const {
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = detailedInfo;

  return (
    <>
      <section>
        {/* Go back */}
        <img src={poster_path} alt={original_title} />
        <div>
          <h2>
            {original_title} <span>{release_date}</span>
          </h2>
          <p>User Score: {vote_average}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </section>

      <section>
        <h2>Additional information</h2>

        <Link to={routes.CAST}>
          <p>Cast</p>
        </Link>
        <Link to={routes.REVIEWS}>
          <p>Reviews</p>
        </Link>

        <Outlet />
      </section>
    </>
  );
};
