import React from 'react';

// import LFCForm from '../components/LFCForm';
import LTCForm from '../components/LTCForm/LTCForm';

const style = {
  container: {
    maxWidth: '40%',
    margin: '0 auto',
    padding: 20,
    background: '#333',
    color: 'whitesmoke',
    fontSize: 18
  },
  tabs: {
    minHeight: 300,
    overflow: 'hidden',
    borderRadius: '8px 8px 0 0',
    position: 'relative',
    display: 'flex'
  },
  tab: {
    flex: 1
  },
  tabLabel: {
    height: 40,
    padding: 10,
    background: '#9768D1',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'block',
    transition: 'background 0.5s ease'
  },
  tabContent: {
    padding: 20,
    background: '#553285',
    borderRadius: '0 0 8px 8px',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    top: 40,
    transition: 'opacity 0.8s ease, transform 0.8s ease',
    // show/hide
    opacity: 0,
    transform: 'scale(0.1)',
    transformOrigin: 'top left'
  }
};

const Search = () => {
  return (
    <div> 
    <h1>SEARCH FOR PROJECTS</h1>
    <div className="searchPage">
      <div style={style.container}>
        <h1>Looking to Code</h1>

        <div className="heading">
              <h2>What sort of project are you looking to join?</h2>
        </div>
      <div>
      <form>
        <h3 className="heading3">What I bring to the table</h3>
         <div className= "">
         <button className="favorite styled"
          type="radio">
          Front End
        </button>

        <button className="favorite styled"
          type="radio">
          Back End
        </button>
        </div>

        <h3 className="heading3">Expected Timeline:</h3>
         <div className= "">
         <button className="favorite styled"
          type="radio">
          5 Hours
        </button>

        <button className="favorite styled"
          type="radio">
          20 Hours
        </button>

        <button className="favorite styled"
          type="radio">
          40+ Hours
        </button>
        </div>

        <h3 className="heading3">I am available...</h3>
         <div className= "">
         <button className="favorite styled"
          type="button">
          Monday
        </button>

        <button className="favorite styled"
          type="button">
          Tuesday
        </button>

        <button className="favorite styled"
          type="radio">
          Wednesday
        </button>

        <button className="favorite styled"
          type="radio">
          Thursday
        </button>

        <button className="favorite styled"
          type="radio">
          Friday
        </button>

        <button className="favorite styled"
          type="radio">
          Saturday
        </button>
        
        <button className="favorite styled"
          type="radio">
          Sunday
        </button>
        </div>


                        
        <button
        className="btn btn-block btn-info"
        type="submit"
        aria-label="Close"
        >
        Submit
         </button>
    </form>
    </div>
          </div>

          <div style={style.tab} className='tab'>
            <input type="radio" id="tab-2" name="tabs" data-toggle="modal" data-target=".bd-example-modal-lg-signup"/>
            <label for="tab-2" style={style.tabLabel}>
              Looking To Code
            </label>
            <div style={style.tabContent} className='tab-content'>
            <LTCForm/>
            </div>
          </div>
        </div>
        </div>
    //   HTML and CSS by AlvaroTrigo on CodePen: TabbyTabs
  );
};

export default Search;