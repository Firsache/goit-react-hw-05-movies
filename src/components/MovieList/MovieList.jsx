import { Link, useLocation } from 'react-router-dom';
import { routes } from 'helpers/routes';
import { List } from './MovieList.styled';
import { Box } from 'components';

export const MovieList = ({ array }) => {
  const location = useLocation();
  return (
    <Box m="0 auto" maxWidth={1200} mt={32}>
      <List array={array}>
        {array.map(({ id, title }) => (
          <li key={id}>
            <Link state={{ from: location }} to={routes.MOVIE_DETAILS_PATH(id)}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </List>
    </Box>
  );
};
