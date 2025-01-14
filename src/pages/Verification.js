import React, { useState, useEffect } from 'react';
import '../../src/styles/Verification.css';
import CodeInput from '../components/codeinput';

const Verification = () => {
  const [time, setTime] = useState(300); 

  useEffect(() => {

    document.title = 'Verification';
    
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer); 
          return 0;
        }
        return prevTime - 1; 
      });
    }, 1000); 

    return () => clearInterval(timer); 
  }, []);


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div id="verif-div">
      <h2>Two-factor Authentication</h2>
      <p>For added security, please enter the 6-digit code sent to your email: so****@tip.edu.ph</p>

      <h2 className="timer">{formatTime(time)}</h2>

    <CodeInput/>

    <p>It may have take a minute to receive your code. 
     <br/> Haven’t received it? Resend a new code.</p>
     <div className="button-container">
    <button type="submit" className="buttons">Submit</button>
  </div>
     <p onClick={() => window.location.href = '/login'} style={{cursor: 'pointer'}}>Cancel</p>
    </div>
  );
};

export default Verification;
