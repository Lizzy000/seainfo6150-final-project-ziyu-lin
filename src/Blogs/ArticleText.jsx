import React from "react";

const ArticleText = props => {
  
  return (
  	<div>
  		<h1>{props.title}</h1>
  		<div>{props.text}</div>
  	</div>
    
  );
};

export default ArticleText;

