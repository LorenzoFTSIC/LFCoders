import React, { useState } from 'react';
import axios from 'axios';


const search = async (query) => {
  console.log("query" + query)
    axios.get(`https://api.github.com/users/${query}/repos`).then(res => {
      console.log("reponse " + res.data)
    });
}



export default search;
