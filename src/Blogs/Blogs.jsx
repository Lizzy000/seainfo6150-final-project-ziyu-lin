import React from 'react';
import ArticleList from "./ArticleList";
import articles from "../Data/articles.json";

const Blog = (props) => {
    return (
        <div>
        	<h1>Article list</h1>
        	<ArticleList articles={Object.values(articles)} />
        </div>
    );
};

export default Blog;