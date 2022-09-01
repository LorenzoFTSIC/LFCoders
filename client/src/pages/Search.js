import React from 'react';

import LFCForm from '../components/LFCForm';
import LTCForm from '../components/LTCForm';

const Search = () => {
  return (
    <>
      <div class="wrapper">
        <div class="tabs">
          <div class="tab">
            <input
              type="radio"
              name="css-tabs"
              id="tab-1"
              checked
              class="tab-switch"
            />
            <label for="tab-1" class="tab-label">
              Looking For Coders
            </label>
            <div class="tab-content">
              <LFCForm />
            </div>
          </div>
          <div class="tab">
            <input type="radio" name="css-tabs" id="tab-2" class="tab-switch" />
            <label for="tab-2" class="tab-label">
              Looking To Code
            </label>
            <div class="tab-content">
              <LTCForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
