import React from 'react';
import search from '../../utils/API';
import { useState, useEffect } from 'react';



const Repos = () => {

    const [result, setResults] = useState([]);


    const searchRepo = async (query) => {
        const response = await search(query);
        setResults(response.data.data);
      };

    useEffect(() => {
    searchRepo(`githubusername`);
    //profile.github 
    }, []);

    const {
        Name = '',
      } = result;

    return (
    <div className="content">
        <h2>REPOS HERE</h2>
        <ul className="list-group">
        {result.map((result) => (
        <li className="list-group-item" key={result.name}> name= {result.name}
        </li>
      ))}
    </ul>
    </div>
    );
  };
  
  export default Repos;