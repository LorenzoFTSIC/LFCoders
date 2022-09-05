import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
// import Contact from './pages/Contact';

const styles = {
  // button: {
  //   backgroundImage:"linear-gradient(to right, rgb(52, 9, 138) , rgb(236, 185, 236))",
  //   color: 'white',
  // },
  trademark: {
    opacity: 0.2
  }
}
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  return (
    <footer>
      <div className="container text-center">
        {location.pathname !== '/' && (
          <button
            className="btn"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
         <h4 style={styles.trademark} >
        <Link to='/contact'
        onClick={() => navigate('Contact')}>
        Contact Us
        </Link>
        </h4>
        <h4 style={styles.trademark} >&copy; {new Date().getFullYear()} - Git Buddies</h4>
      </div>
    </footer>
  );
};

export default Footer;
