import { NavLink } from 'react-router-dom';
import { EMAIL, mix1Nav } from './content';

export function Mix1Nav() {
  return (
    <header className="mix1-nav">
      <NavLink to="/" className="mix1-nav__mark" end>
        O§R
      </NavLink>
      <nav className="mix1-nav__links">
        {mix1Nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? 'is-on' : '')}
          >
            {item.name}
          </NavLink>
        ))}
        <a className="mix1-pxbtn mix1-pxbtn--chip" href={`mailto:${EMAIL}`}>
          Contact
        </a>
      </nav>
    </header>
  );
}
