import { Outlet } from 'react-router-dom';
import { routes } from 'helpers/routes';
import { Box } from 'components';

import { Section, AddSection, Info, StyledLink } from './MovieInfo.styles';

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
    <Box m="0 auto" maxWidth={1200}>
      <Section>
        <img src={poster_path} alt={original_title} />
        <Info>
          <h2>
            {original_title} ({release_date})
          </h2>
          <p>User Score: {vote_average}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </Info>
      </Section>

      <AddSection>
        <h2>Additional information</h2>

        <Box
          display="flex"
          justifyContent="space-between"
          width={250}
          alignItems="center"
        >
          <StyledLink to={routes.CAST}>
            <p>Cast</p>
          </StyledLink>

          <StyledLink to={routes.REVIEWS}>
            <p>Reviews</p>
          </StyledLink>
        </Box>
      </AddSection>

      <Outlet />
    </Box>
  );
};
