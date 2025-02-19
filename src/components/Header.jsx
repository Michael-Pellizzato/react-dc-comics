import logo from "../assets/img/dc-logo.png"
import Navbar from "./Navbar";

// const links = [
    //     { id: 1, text: 'Characters', url: '#', current: false },
    //     { id: 2, text: 'Comics', url: '#', current: true },
    //     { id: 3, text: 'Movies', url: '#', current: false },
    //     { id: 4, text: 'TV', url: '#', current: false },
    //     { id: 5, text: 'Games', url: '#', current: false },
    //     { id: 6, text: 'Collectibles', url: '#', current: false },
    //     { id: 7, text: 'Videos', url: '#', current: false },
    //     { id: 8, text: 'Fans', url: '#', current: false },
    //     { id: 9, text: 'News', url: '#', current: false },
    //     { id: 10, text: 'Shop', url: '#', current: false },
    // ];

const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="DC Logo" height="40" />
        </a>
         <Navbar /> 
      </nav>
    </div>
  );
};

export default Header;
