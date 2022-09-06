import axios from 'axios';

const search = async (user) =>
  axios.get(`https://api.github.com/users/${user}/repos`);

export default search;
