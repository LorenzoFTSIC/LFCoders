import axios from 'axios';

const search = async (query) =>
  axios.get(`https://api.github.com/users/${query}/repos`);


export default search;
