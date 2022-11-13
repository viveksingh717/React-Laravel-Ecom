import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import axios from 'axios';

import Dashboard from './Components/admin-components/Dashboard';
import Profile from './Components/admin-components/Profile';
import Product from './Components/admin-components/Product';
import Category from './Components/admin-components/Category';

import MasterPage from './Layout/Admin_Layout/MasterPage';
import Home from './Components/Home';
import MainPage from './Layout/Master_Layout/MainPage';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Error404 from './Components/Error404';
import PrivateComponents from './Components/PrivateComponents';
import PublicComponents from './Components/PublicComponents';
import swal from 'sweetalert';

// axios.defaults.baseURL = 'http://localhost:8000/api/';
// axios.defaults.headers.common['Authorization'] = 'bearer Token'
// axios.defaults.withCredentials = true;

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const authToken = localStorage.getItem('auth_token');
axios.defaults.headers.common['Authorization'] = authToken ? `Bearer ${authToken}` : '';

axios.interceptors.request.use(config =>{
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';

  return config;
});

axios.interceptors.response.use(undefined, function axiosRetryInterceptor (err){
  console.log(err.response.data);
  if (err.response.data.status === 401) {
    swal('Forbbiden', 'Invalid user credentials', 'warning');
  }

  return Promise.reject(err);
});

function App() {
  return (
    <div className="App">
    <Routes>
      <Route element={<PrivateComponents />}>
        <Route path="/admin" element={<MasterPage />} >
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route exact path='/admin/profile' element={<Profile />} />
          <Route exact path='/admin/product' element={<Product />} />
          <Route exact path='/admin/category' element={<Category />} />
          <Route path="/admin" element={<Navigate to="/admin/dashboard"/>} />
        </Route>
      </Route>

      <Route element={<PublicComponents />} >
        <Route path='/' element={<MainPage />} >
          <Route path='/home' element={<Home />} />
          <Route path="/" element={<Navigate to="/home"/>} />
        </Route>
      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
    </div>
  );
}

export default App;
