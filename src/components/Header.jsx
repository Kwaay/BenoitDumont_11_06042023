import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <img src="../src/assets/logo-color.svg" className="header-img" />
      <nav className="header-container">
        <ul>
          <Link to={'/'}>
            <li className="nav-btn">Accueil</li>
          </Link>
          <Link to={'/about'}>
            <li className="nav-btn">A propos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
