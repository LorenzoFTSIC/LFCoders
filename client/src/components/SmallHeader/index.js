import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import '../../assets/img/Looker-Placeholder.png';
import Looker from '../../assets/img/Looker-Placeholder.png';

const style = {
  header: {
    width: '100%',
    marginBottom: '50px',
    padding: '10px 30px',
    background: '#dd39fe',
      // 'linear-gradient (to right, #dd39fe , #161616',
    justifyContent: 'space-between', 
  }, 
  headerSections: { 
    width: '100%',
    justifyContent: 'space-between'
  }
};

const SmallHeader = () => {
  return (
    <header style={style.header}>
      <div className="d-inline-flex" style={style.headerSections}>
        <Link className="text-dark logo" to="/" >
          <div className="d-inline-flex align-items-end">
            <img className="looker" src={Looker} alt="Looker"></img>
            <h1 className="m-3">LFC</h1>
          </div>
        </Link>
        <Nav/>
      </div>
    </header>
  );
};

export default SmallHeader;
