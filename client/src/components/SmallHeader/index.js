import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  // The underline on the site initials won't come off... In devtools it says its attributed to a:-webkit-any-link (user agent stylesheet)
  a: {
    textUnderline: 'none !important'
  }
};

const Header = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3">
      <div className="d-inline-flex justify-space-between mx-3">
        <Link className="text-dark logo" to="/" style={style.a}>
          <div className="d-inline-flex justify-space-between">
            <img
              className="looker mx-3"
              src="../../assets/img/Looker-Placeholder.png"
              alt="Looker"
            ></img>
            <h1 className="mx-3">
              LFC
            </h1>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
