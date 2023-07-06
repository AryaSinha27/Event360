import React from "react";
import "./Header.css";
// import REACTLOGO from "./https://icarians.net/upload/client/1006074620210722event%201.jpg";
// import SearchIcon from '@material-ui/icons/Search'
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  // const refresh = () =>
  //   setTimeout(function () {
  //     window.location.reload();
  //   }, 1000);

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand active" to="/">
    {/* Event 360 */}
    <img className="header_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6NiC0N54IMA0HXPZxaVlExGWLtLPuQUaHQ&usqp=CAU" alt="" />
    
    </Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <Link className="nav-link" to="/home">Home </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/tent">Tent Booking</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/stage">Stage Production</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/cars">Cars Booking</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/decoration">Decoration</Link>
      </li>

      <li className="nav-item">
      <Link to={!user && '/login'}>
          <div onClick={handleAuthentication}
          className="header_option">
            <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out'
            : 'Sign In'}</span>
          </div>
        </Link>
      </li>

      <Link to="/checkout">
          <div className="nav-item">
            {/* <ShoppingBasketIcon/> */}
            <span className="nav-link">
              {basket?.length} 
            </span>
          </div>
        </Link>
      
    </ul>

  </div>
</nav>
    </>
  );
};

export default Header;
