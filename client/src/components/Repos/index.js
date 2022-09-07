import React from 'react';
import search from '../../utils/API';
import { useState, useEffect } from 'react';
import axios from 'axios';



const Repos = (username) => {
  console.log(username)

  console.log(username.username.toString().split("/")[1])

    const [result, setResults] = useState([]);


    const searchRepo = async (query) => {
        const response = await axios.get(`https://api.github.com/users/${query}/repos`).then(res => {
          console.log("reponse " + res.data)
          return res.data;
        });
        console.log("search", query)
        console.log(response + "function")
        setResults(response);
      };

    useEffect(() => {
    searchRepo(username.username.toString().split("/")[1]);
    //profile.github 
    }, []);


    return (
    <div className="content">
        <h2>REPOS HERE</h2>
        <ul className="list-group">
        {result.map((result) => (
/*          repoUrl = `https\://github.com/${result.owner.url}/${result.name}`
 */        <li className="list-group-item" key={result.name}> <a target="_blank" href={result.owner.html_url + "/" +result.name}>{result.name}</a>
        </li>
      ))}
    </ul>
    </div>
    );
  };
  
  export default Repos;