import React from 'react'
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";

import logo from '../../Assets/Admin_Assets/img/undraw_rocket.svg';
import swal from 'sweetalert';

function Sidebar() {
    const navigate = useNavigate();
    
    const logout = (e) => {
        e.preventDefault();

        axios.post(`/api/auth/logout`).then(res=>{
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('user_id');
                localStorage.removeItem('user_name');

                swal("Success!","Logged out successfully!", "success");
                navigate('/login');
            } else {
                swal("Error!","Something went wrong", "danger");
                // navigate('/login');
            }
        });
    }

  return (
    <div>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-2">Vivek Admin <sup><small>coolhunter</small></sup></div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link className="nav-link" to="">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>

            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Services
            </div>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    <i className="fas fa-fw fa-tag"></i>
                    <span>Product</span>
                </Link>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Product Service:</h6>
                        <Link className="collapse-item" to="product">Product List</Link>
                        <Link className="collapse-item" to="#">Add Product</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    {/* <i className="fas fa-fw fa-cog"></i> */}
                    <i className="fa fa-fw fa-layer-group"></i>
                    <span>Category</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Category Service:</h6>
                        <Link className="collapse-item" to="category">Category List</Link>
                        <Link className="collapse-item" to="#">Add Category</Link>
                    </div>
                </div>
            </li>

            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Addons
            </div>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-id-badge"></i>
                    <span>Profile</span>
                </Link>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Profile Setting:</h6>
                        <Link className="collapse-item" to="profile">Profile</Link>
                        <Link className="collapse-item" to="#">Forgot Password</Link>
                        <Link className="collapse-item" to="#" onClick={logout}>Logout</Link>
                    </div>
                </div>
            </li>
           
            <hr className="sidebar-divider d-none d-md-block"/>

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src={logo} alt="Logo"/>
                <p className="text-center mb-2"><strong>Vivek Admin</strong></p>
            </div>

        </ul>
    </div>
  )
}

export default Sidebar;