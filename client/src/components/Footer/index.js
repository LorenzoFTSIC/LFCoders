import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
// import Contact from './pages/Contact';

const styles = {
  contactuslink:{
    textDecoration: "none",
    marginTop:'20px',
    color:'white',
    opacity: 0.7
  },
  trademark: {
    marginTop:'5px',
    opacity: 0.2,
    fontSize:'large'
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
         <h4 className= "contactuslink" style={styles.contactuslink}>
        <Link className= "contactuslink" style={styles.contactuslink} to='/contact'
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
