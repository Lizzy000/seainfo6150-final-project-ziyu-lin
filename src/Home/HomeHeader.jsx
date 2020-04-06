  
import React from 'react';
import { Link } from 'react-router-dom';


const HomeHeader = props => {
  
  return (
    <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/photo">Photo</Link>
            </li>
            <li>
              <Link to="/comment">Comment</Link>
            </li>
          </ul>
        </nav>
  </header>
    
  );
};

export default HomeHeader;

