import React from 'react'
import {Link} from "react-router-dom";

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

// import Dashboard from '../../Components/admin-components/Dashboard';
// import Product from '../../Components/admin-components/Product';
// import Category from '../../Components/admin-components/Category';
// import Profile from '../../Components/admin-components/Profile';
import PrivateComponents from '../../Components/PrivateComponents';

function MasterPage() {
  return (
    <div>
        <div id="page-top">
            <div id="wrapper">
                    <Sidebar/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Navbar/>

                        <div className="container-fluid">
                            <PrivateComponents />
                        </div>

                        <Footer/>
                    </div>
                </div>
            </div>
            {/* Scroll to Top Button */}
            <Link className="scroll-to-top rounded" to="#page-top">
                <i className="fas fa-angle-up"></i>
            </Link>
        </div>
    </div>
  )
}

export default MasterPage;


