import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";




const ArticleListItem = props => {
  return (
    <div>
    	<h3>
      		<Link to={`/blogs/${props.article.title}`}>{props.article.title}</Link>
      	</h3>
      	<p>{props.article.shortText}</p>
           
    </div>
  );
};

export default ArticleListItem;