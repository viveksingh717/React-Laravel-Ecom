import React from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <Link to="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Generate Report</Link>
      </div>

      <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                  Earnings (Monthly)</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                          </div>
                          <div className="col-auto">
                              <i className="fas fa-calendar fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard;
