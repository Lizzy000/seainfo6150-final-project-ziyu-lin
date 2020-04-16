import React from "react";
import styles from "./ArticleText.module.css";

const ArticleText = props => {
  
  return (
  	<div>
  		<h1>{props.title}</h1>
  		<div className={styles.text}>{props.text}</div>
  	</div>
    
  );
};

export default ArticleText;

