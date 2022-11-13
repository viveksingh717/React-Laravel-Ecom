import React from 'react'
import {Outlet, Navigate} from "react-router-dom";

function PublicComponents() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default PublicComponents;
