import React from 'react';
import { Link } from 'react-router-dom';

const style = { 
    // The underline on the site initials won't come off... In devtools it says its attributed to a:-webkit-any-link (user agent stylesheet)
    a: { 
        textUnderline: "none !important",
    },
}

const Header = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg">
        <Link className="text-dark logo" to="/" style={style.a}>
          {/* <img>INSERT LOOKER HERE</img> */}
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            LFC
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
