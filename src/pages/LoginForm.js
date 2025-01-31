import React, { useState, useEffect } from 'react';
import '../../src/styles/LoginForm.css';
import '../../src/styles/InputFields.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

useEffect(() => {
  document.title = 'Login to NaviTech?';
}, []
)  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (

    <div id="login-div">
      <h2>Welcome Back!</h2>
      <p>Glad to see you again
      <br/>
      Log in to your account below.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label class="fieldLabel">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Enter email'
            required 
            class="textField"
          />
        </div>
        <div>
          <label class="fieldLabel">Password</label>
          <input 
            type="password" 
            value={password} 
            placeholder='Enter password'
            onChange={(e) => setPassword(e.target.value)} 
            required 
            class="textField"
          />
        </div>
        <button type="submit" class="buttons" onClick={() => window.location.href = '/verification'}>Login</button>
        <p class="forgot-password">Forgot password?</p>
      </form>
      
    </div>
  );
};

export default LoginForm;
