import axios from 'axios';

const search = async (query) =>
  axios.get(`https://api.github.com/users/{user}/repos{?type,page,per_page,sort}`);

export default { search };
