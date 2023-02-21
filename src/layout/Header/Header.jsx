import { Link, NavLink } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { HeaderBlock, Navigation } from './Header.styled';

export const Header = () => {
  return (
    <HeaderBlock>
      <Box maxWidth={1200} display="flex" justifyContent="space-between">
        <Link to="/">Movies App</Link>
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </Navigation>
      </Box>
    </HeaderBlock>
  );
};
