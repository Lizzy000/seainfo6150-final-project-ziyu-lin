import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./ArticleListItem.module.css";



const ArticleListItem = props => {
  return (
    <div className={styles.item}>
    	<h2>
      		<Link to={`/blogs/${props.article.title}`}>{props.article.title}</Link>
      	</h2>
      	<p>{props.article.shortText}</p>
           
    </div>
  );
};

export default ArticleListItem;