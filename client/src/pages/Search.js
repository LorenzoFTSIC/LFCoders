import React from 'react';

import LFCForm from '../components/LFCForm';
import LTCForm from '../components/LTCForm';

const Search = () => {
  return (
    <div className="searchPage">
      <div class="container">
        <h1>Search</h1>

        <div class="tabs">
          <div class="tab">
            <input type="radio" id="tab-1" name="tabs" checked />
            <label for="tab-1">Looking For Coders</label>
            <div class="tab-content">
              <LFCForm />
            </div>
          </div>

          <div class="tab">
            <input type="radio" id="tab-2" name="tabs" />
            <label for="tab-2">Looking To Code</label>
            <div class="tab-content">
              <LTCForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
