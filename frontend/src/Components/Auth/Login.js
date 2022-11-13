import React, {useState, useEffect} from 'react'
import Helmet from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import swal from 'sweetalert';

import '../../Assets/Master_Assets/css/custom.css'

function Login() {
  const navigate = useNavigate();

  const [loginInput, setLogin] = useState({
      email: '',
      password: '',
      errors: [],
  });

  function handleInput(e){
    e.persist();

    setLogin({...loginInput, [e.target.name]:e.target.value});
  }

  function loginUser(e){
    e.preventDefault();
    
    const loginData = {
      email: loginInput.email,
      password: loginInput.password,
    }

    axios.post(`/api/auth/login`, loginData).then(res => {
      if (res.data.status === 200) {
        console.log(res.data);
        localStorage.setItem('auth_token', res.data.access_token);
        localStorage.setItem('user_id', res.data.user.id);
        localStorage.setItem('user_name', res.data.user.name);

        swal("Success!","Logged In successfully!", "success");
        navigate('/');
      }else if(res.data.status === 401){
        swal("Unauthorized!", res.data.msg, "danger");
        // navigate('/dashboard');
      }
      else{
        setLogin({...loginInput, errors:res.data.msg});
      }
    });
  }
  
  useEffect(() => {
    const auth = localStorage.getItem('auth_token');

    if (auth) {
      navigate('/');
    }
    
  }, [])
  

  return (
    <div>
    <Helmet>
        <style>{'body { background-color: #CCD1D1; }'}</style>
    </Helmet>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-7 mt-5 p-3'>
          <div className='card shadow-lg rounded'>
            <div className='card-header font-weight-bold bg-gradient-dark text-light'>Login Form</div>
            <div className='card-body'>
              <form onSubmit={loginUser} id='login-form' className='p-1'>
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Email address</label>
                  <input type="email" className="form-control" name="email" value={loginInput.email} onChange={handleInput} placeholder="Enter email"/>
                  <span className='text-danger'>{loginInput.errors.email}</span>
                </div>
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Password</label>
                  <input type="password" className="form-control" name='password' value={loginInput.password} onChange={handleInput} placeholder="Password"/>
                  <span className='text-danger'>{loginInput.errors.password}</span>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block bg-gradient-primary">Login</button>
                </div>
              </form>
              <p className='text-center'>don't have an account ? <Link to="/register" className='text-decoration-none'> Sign up Here</Link></p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
