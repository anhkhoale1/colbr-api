import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import Header from './Header';
import { Alert } from 'react-bootstrap';

function Register() {
  useEffect(() => {
    if(localStorage.getItem('user-info')) {
      navigate('/login');
    }
  }, [])
  const [firstname, setFirstname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setError] = useState("");
  const navigate = useNavigate ();

  async function signUp() {
    let data = { firstname, name, email, password };
    console.log(data);

    let result = await fetch("http://localhost:8000/api/register", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    result = await result.json();
    if (result.error) {
      navigate('/register');
      setError(result.error);
    }
    else {
      navigate('/dashboard');
      localStorage.setItem('user-info',JSON.stringify(result));
    }
  }

  return (
    <>
      <Header/>
      <div className="col-sm-6 offset-sm-3">
        <h1>Register Page</h1>
        { errorMessage ? 
            <Alert variant="danger">
            <Alert.Heading>
              { errorMessage }
            </Alert.Heading>
          </Alert>
          : null
        }
        <input type="text" value={firstname} className="form-control" placeholder="firstname" onChange={(e)=>setFirstname(e.target.value)}/>
        <br />
        <input type="text" value={name} className="form-control" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
        <br />
        <input type="text" value={email} className="form-control" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <input type="password" value={password} className="form-control" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <button onClick={signUp} className='btn btn-primary'>Sign Up and Login</button>
      </div>
    </>
  )
}

export default Register