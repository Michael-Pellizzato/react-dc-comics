import logo from "../assets/img/dc-logo.png"
import Navbar from "./Navbar";


const Header = (props) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="DC Logo" height="40" />
        </a>
         <Navbar links={props.links}/> 
      </nav>
    </div>
  );
};

export default Header;
