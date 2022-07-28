import Header from './Header';
import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { Alert } from 'react-bootstrap'

function Login() {
  const navigate = useNavigate ();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setError] = useState("");

  useEffect(() => {
    if(localStorage.getItem('user-info')) {
      navigate('/dashboard');
    }
  }, [])
  async function login() {
    let item = {email, password};
    let result = await fetch("http://localhost:8000/api/login",{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept': 'application/json'
      },
      body : JSON.stringify(item)
    })
    result = await result.json();
    if (result.error) {
      navigate('/login');
      setError(result.error);
    }
    else {
      navigate('/dashboard');
      localStorage.setItem('user-info',JSON.stringify(result));
    }
  }
  return (
    <>  
      <Header />
      <div>
        <h1>Login Page</h1>
        <div className='col-sm-6 offset-sm-3'>
        { errorMessage ? 
            <Alert variant="danger">
            <Alert.Heading>
              { errorMessage }
            </Alert.Heading>
          </Alert>
          : null
        }
        <input type='text' placeholder='email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <input type='password' placeholder='password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <br/>
        <button className='btn btn-primary' onClick={login}>Login</button>
      </div>
    </>
  )
}

export default Login