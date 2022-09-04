import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import '../../assets/img/Looker-Placeholder.png';
import Looker from '../../assets/img/welcomerobot.png';

const style = {
  header: {
    width: '100%',
    marginBottom: '50px',
    padding: '0px 15px 0 30px',
    justifyContent: 'space-between', 
  }, 
  headerContentSections: { 
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  looker: {
    height: "120px",
    marginTop: 15,
  }, 
  logo: { 
    color: 'whitesmoke'
  }
};

const SmallHeader = () => {
  return (
    <header style={style.header}>
      <div className="d-inline-flex" style={style.headerContentSections}>
        <Link className="text-dark logo" to="/" >
          <div className="d-inline-flex align-items-end">
            <img className="looker" src={Looker} alt="Looker"  style={style.looker}></img>
            <h1 style={style.logo}>LFC</h1>
          </div>
        </Link>
        <Nav/>
      </div>
    </header>
  );
};

export default SmallHeader;
