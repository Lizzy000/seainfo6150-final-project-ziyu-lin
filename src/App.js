import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Blogs from "./Blogs/Blogs.jsx";
import Categories from "./Categories/Categories.jsx";
import Error from "./Error/Error.jsx";
import Photo from "./Photo/Photo.jsx";
import Comment from "./Comment/Comment.jsx";
import HomeHeader from "./Home/HomeHeader.jsx";
import ArticleText from "./Blogs/ArticleText";

import articles from "./Data/articles.json";


function App() {
  return (
    <Router>
      
      <HomeHeader />
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/blogs" exact component={Blogs} />
        <Route path="/photo" exact component={Photo} />
        <Route path="/comment" exact component={Comment} />
        <Route path="/404" component={Error} />

        {Object.values(articles).map(article => (
        
        <Route path={`/blogs/${article.title}`} exact render={() => 
            <ArticleText title={article.title} text={article.text} />} />
        
        ))}
      </Switch>

      
    </Router>
  );
}

export default App;
