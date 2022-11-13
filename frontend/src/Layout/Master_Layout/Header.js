import React from 'react'
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";

import '../../Assets/Master_Assets/css/custom.css'
import logos from '../../Assets/Master_Assets/images/logos/vivek_code_logo7.png';
import swal from 'sweetalert';

function Header() {
  const navigate = useNavigate();
  var auth_check = '';

  const logout = (e) => {
    e.preventDefault();

    axios.post(`/api/auth/logout`).then(res => {

      if (res.data.status === 200) {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('user_id');
          localStorage.removeItem('user_name');

          swal("Success!","Logged out successfully!", "success");
          navigate('/login');
      } else {
          swal("Error!","Something went wrong!", "danger");
          // navigate('/login');
      }
    });
  }

  const auth = localStorage.getItem('auth_token');

  if (auth) {
    auth_check = (
      <ul className='navbar-nav ml-auto'>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true">
            Vivek
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="#">Setting</Link>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="#" onClick={logout}>Logout</Link>
          </div>
        </li>
    </ul>
    )
  } else {
    auth_check = (
      <ul className='navbar-nav ml-auto'>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
      </ul>
    )
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-gradient-light shadow-lg" style={{backgroundColor: "lightblue"}}>
        <div className='container'>
          <Link className="navbar-brand" to="/"><img src={logos} className='appLogo' alt='Logo'/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Collection</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true">
                  Menu
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">Action</Link>
                  <Link className="dropdown-item" to="#">Another action</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">Something else here</Link>
                </div>
              </li>
            </ul>
            {auth_check}
          </div>
        </div>
      </nav>  
    </div>
  )
}

export default Header;
