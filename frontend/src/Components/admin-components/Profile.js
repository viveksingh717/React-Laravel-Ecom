import React from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom";

function Profile() {
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Profile</h1>
        <Link to="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Generate Report</Link>
      </div>
    </div>
  )
}

export default Profile;
