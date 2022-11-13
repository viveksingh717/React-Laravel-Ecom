import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useNavigate, Outlet, Navigate} from "react-router-dom";
import swal from 'sweetalert';

function PrivateComponents() {
    const authToken = localStorage.getItem('auth_token');
    // const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (authToken) {
        setLoading(false);
      }

      return () => {
        setLoading(true);
      }

    }, [])

    if (loading) {
      return <h2 className='text-center text-dark'>Loading..</h2>
    }

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor (err){
      if (err.data.status === 401) {
        swal('Forbbiden', err.response.data.message, 'warning');
      }

      return Promise.reject(err);
    });

    // axios.interceptors.response.use(function(response){
    //     return response;
    // }, function(error){
    //     if (error.response.status === 403) {
    //         swal('Forbbiden', error.response.data.msg, 'warning');
    //         navigate('/login');
    //     } else if(error.response.status === 404) {
    //         swal('Not found', 'Page not found', 'danger');
    //         navigate('/Error404');
    //     }
    // })
    

  return (
    // authenticated ? <Outlet /> : <Navigate to='/login' />
    authToken ? <Outlet /> : <Navigate to='/login' />
    
  )
}

export default PrivateComponents;
