import { Link, NavLink } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { HeaderBlock, Navigation } from './Header.styled';
import { routes } from 'helpers/routes';

export const Header = () => {
  return (
    <HeaderBlock>
      <Box
        m="0 auto"
        maxWidth={1200}
        display="flex"
        justifyContent="space-between"
      >
        <Link to={routes.HOME}>Movies App</Link>
        <Navigation>
          <NavLink to={routes.HOME}>Home</NavLink>
          <NavLink to={routes.MOVIES}>Movies</NavLink>
        </Navigation>
      </Box>
    </HeaderBlock>
  );
};
