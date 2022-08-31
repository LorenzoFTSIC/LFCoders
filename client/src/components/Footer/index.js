import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const styles = {
  button: {
    backgroundImage:"linear-gradient(to right, rgb(52, 9, 138) , rgb(236, 185, 236))",
    color: 'white'
  }
}

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            style={styles.button}
            className="btn mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - Git Buddies</h4>
      </div>
    </footer>
  );
};

export default Footer;
