import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SplashScreen.css';
import splashImage from '../assets/images/logo.png';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); // Navigate to /login after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Clear the timer on cleanup
  }, [navigate]);

  return (
    <div className="splash-container">
      <img src={splashImage} alt="Splash" className="splash-image" />
    </div>
  );
};

export default SplashScreen;
