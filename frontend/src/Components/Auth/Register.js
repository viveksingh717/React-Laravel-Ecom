import React, {useState, useEffect} from 'react'
import Helmet from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import swal from 'sweetalert';

import '../../Assets/Master_Assets/css/custom.css'

function Register() {
  const navigate = useNavigate();

  const [registerInput, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    errors: [],
  });

  function handleInput(e){
    e.persist();

    setRegister({...registerInput, [e.target.name]:e.target.value});
  }

  function registerUser(e){
    e.preventDefault();
    
    const inputData = {
      name:registerInput.name,
      email:registerInput.email,
      password:registerInput.password,
    }

    axios.post(`/api/auth/register`, inputData).then(res => {
      console.log(res.data);
      if (res.data.status === 201) {
        swal("Success!", "User created successfully!", "success");
        navigate('/login');
        
      }else{
        setRegister({...registerInput, errors:res.data.msg});
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
          <div className='col-md-8 mt-5 p-3'>
          <div className='card shadow-lg rounded'>
            <div className='card-header font-weight-bold bg-gradient-danger text-light'>Register Form</div>
            <div className='card-body'>
              <form onSubmit={registerUser} id='register-form' className='p-1'>
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Full Name</label>
                  <input type="text" className="form-control" name="name" onChange={handleInput} value={registerInput.name} placeholder="Enter name"/>
                  <span className='text-danger'>{registerInput.errors.name}</span>
                </div>
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Email address</label>
                  <input type="email" className="form-control" name="email" onChange={handleInput} value={registerInput.email} placeholder="Enter email"/>
                  <span className='text-danger'>{registerInput.errors.email}</span>
                </div>
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Password</label>
                  <input type="password" className="form-control" name='password' onChange={handleInput} value={registerInput.password} placeholder="Password"/>
                  <span className='text-danger'>{registerInput.errors.password}</span>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block bg-gradient-primary">Register</button>
                </div>
              </form>
              <p className='text-center'>Already a member? <Link to="/login" className='text-decoration-none'>Login Here</Link></p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
