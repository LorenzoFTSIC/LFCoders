import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import '../../assets/img/Looker-Placeholder.png';
import Looker from '../../assets/img/Looker-Placeholder.png';

const style = {
  header: {
    width: '100%',
    marginBottom: '50px',
    padding: '10px 30px 0 30px',
    background: '#dd39fe',
      // 'linear-gradient (to right, #dd39fe , #161616',
    justifyContent: 'space-between', 
  }, 
  headerContentSections: { 
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
};

const SmallHeader = () => {
  return (
    <header style={style.header}>
      <div className="d-inline-flex" style={style.headerContentSections}>
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
