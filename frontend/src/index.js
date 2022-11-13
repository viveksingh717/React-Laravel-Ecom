import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
// import axios from 'axios';

import '../src/Assets/Admin_Assets/css/sb-admin-2.min.css';
import '../src/Assets/Admin_Assets/js/sb-admin-2.min.js';
import '../src/Assets/Admin_Assets/vendor/fontawesome-free/css/all.min.css';
import '../src/Assets/Admin_Assets/css/sb-admin-2.css';
// import '../src/Assets/Admin_Assets/js/sb-admin-2.js';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
