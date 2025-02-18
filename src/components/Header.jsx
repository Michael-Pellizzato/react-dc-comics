import logo from "../assets/img/dc-logo.png"


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="DC Logo" height="40" />
      </a>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><a className="nav-link text-dark" href="#">CHARACTERS</a></li>
        <li className="nav-item"><a className="nav-link text-primary border-bottom border-primary" href="#">COMICS</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#">MOVIES</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#">TV</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#">GAMES</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#">COLLECTIBLES</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#">VIDEOS</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#">FANS</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#">NEWS</a></li>
        <li className="nav-item"><a className="nav-link text-dark" href="#">SHOP</a></li>
      </ul>
    </nav>

  );
};

export default Header;
