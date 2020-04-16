import React from 'react';
import ArticleList from "./ArticleList";
import articles from "../Data/articles.json";
import styles from "./Blogs.module.css";

const Blog = (props) => {
    return (
        <div>
        	<h1>Blogs</h1>
        	<ArticleList articles={Object.values(articles)} />
        </div>
    );
};

export default Blog;