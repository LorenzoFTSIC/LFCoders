import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import '../../assets/img/Looker-Placeholder.png';
import Looker from '../../assets/img/welcomerobot.png';

const style = {
  // The underline on the site initials won't come off... In devtools it says its attributed to a:-webkit-any-link (user agent stylesheet)
  a: {
    textUnderline: 'none !important'
  },

  big: {
    backgroundImage:
      'linear-gradient(to right, rgb(52, 9, 138) , rgb(236, 185, 236))',
  },

  header: {
    width: '100%',
    justifyContent: 'space-between',
  },
  looker: {
    height: "120px"
  }
};

const SmallHeader = () => {
  return (
    <header className="big bg-info text-dark mb-4 py-3" style={style.big}>
      <div className="d-inline-flex" style={style.header}>
        <Link className="text-dark logo" to="/" style={style.a}>
          <div className="d-inline-flex justify-space-between align-items-end">
            <img className="looker mx-2" src={Looker} alt="Looker" style={style.looker}></img>
            <h1 className="mx-2">LFC</h1>
          </div>
        </Link>
        <Nav/>
      </div>
    </header>
  );
};

export default SmallHeader;
