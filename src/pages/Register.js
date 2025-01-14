import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import '../../src/styles/LoginForm.css';
import '../../src/styles/InputFields.css';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

const Register = () => {
    const [admin_id, setAdminId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  
    const navigate = useNavigate();
  
    useEffect(() => {
      document.title = 'Register to NaviTech!';
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Call Supabase's signUp method to register the user
      const { user, error: signupError } = await supabase.auth.signUp({
        admin_id,
        email,
        password
      });
  
      if (signupError) {
        // Handle error (e.g., invalid email, weak password)
        setError(signupError.message);
        setSuccess('');
      } else {
        // Handle successful registration
        setSuccess('Registration successful! Please check your email for verification.');
        setError('');
  
        // Insert email and password into the 'admin' table
        const { data, error: insertError } = await supabase
          .from('admin') // Specify your table name
          .insert([{ admin_id, email, password }]); // Insert email and password as a new record
  
        if (insertError) {
          setError(`Error inserting data: ${insertError.message}`);
          setSuccess('');
          return;
        }
  
        // If insertion is successful, navigate to the login page
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Redirect after 2 seconds, so the user can see the success message
      }
    };
  
    return (
      <div id="login-div">
        <h2>Register!</h2>
        <p>Glad to see you again
        <br />
        Log in to your account below.
        </p>
  
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
  
        <form onSubmit={handleSubmit}>
        <div>
            <label className="fieldLabel">Employee ID</label>
            <input
              type="text"
              value={admin_id}
              onChange={(e) => setAdminId(e.target.value)}
              placeholder="Enter Employee ID"
              required
              className="textField"
            />
          </div>
          <div>
            <label className="fieldLabel">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
              className="textField"
            />
          </div>
          <div>
            <label className="fieldLabel">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="textField"
            />
          </div>
          <button type="submit" className="buttons">Register</button>
        </form>
      </div>
    );
  };
  
  export default Register;
// 7jjKFzQYjyOJwivs
// postgresql://postgres:7jjKFzQYjyOJwivs@db.gkeyiaxnagkltnxfhgxm.supabase.co:5432/postgres