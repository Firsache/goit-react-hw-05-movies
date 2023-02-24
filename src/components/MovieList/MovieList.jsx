import { Link, useLocation } from 'react-router-dom';
import { routes } from 'helpers/routes';
import { List } from './MovieList.styled';

export const MovieList = ({ array }) => {
  const location = useLocation();
  return (
    <List array={array}>
      {array.map(({ id, title }) => (
        <li key={id}>
          <Link state={{ from: location }} to={routes.MOVIE_DETAILS_PATH(id)}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </List>
  );
};
