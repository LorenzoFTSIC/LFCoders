import React from 'react';

// import LFCForm from '../components/LFCForm';
// import LTCForm from '../components/LTCForm';

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
    <div className="searchPage">
      <div style={style.container}>
        <h1>Search</h1>

        <div style={style.tabs} className='tabs'>
          <div style={style.tab} className='tab'>
            <input type="radio" id="tab-1" name="tabs" checked />
            <label for="tab-1" style={style.tabLabel}>
              Looking For Coders
            </label>
            <div style={style.tabContent} className='tab-content'>
              {/* <LFCForm /> */}
            </div>
          </div>

          <div style={style.tab} className='tab'>
            <input type="radio" id="tab-2" name="tabs" />
            <label for="tab-2" style={style.tabLabel}>
              Looking To Code
            </label>
            <div style={style.tabContent} className='tab-content'>
              {/* <LTCForm /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    //   HTML and CSS by AlvaroTrigo on CodePen: TabbyTabs
  );
};

export default Search;