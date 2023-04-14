export default function Header() {
  return (
    <header className="header">
      <img src="../src/assets/logo.svg" className="header-img" />
      <nav className="header-container">
        <ul>
          <li className="nav-btn">Accueil</li>
          <li className="nav-btn">A propos</li>
        </ul>
      </nav>
    </header>
  );
}
