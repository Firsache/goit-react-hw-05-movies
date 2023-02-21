import { Link, NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <header>
      <Link to="/">Movies App</Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </header>
  );
};
