import React from "react";
import styles from "./About.module.css";

const About = props => {
	
	return (
		<div>
        <h1>About Me</h1>
        <ul>
          <li> 
              <p><span>Ziyu Lin </span></p>
              
          </li>
          <li>
              <p>A Software Developer.</p>
          </li>
          <li>
              <p>A Problem Solver.</p>
          </li>
          <li>
              <p>Northeastern University</p>
          </li>
          <li>
              <p>Seattle</p>
          </li>
        </ul>
    </div>		
	);
};

export default About;