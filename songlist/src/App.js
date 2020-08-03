import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ArticlesList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import NavBar from './NavBar'

function App() {
  return (
    <Router>
 <div className="App">
      <div id ="page-body">
        <NavBar/>
       <Route path ="/"  component = {HomePage} exact></Route>
       <Route path ="/about"  component = {AboutPage} ></Route>
       <Route path ="/articles-list"  component = {ArticlesList} ></Route>
       <Route path ="/article/:name"  component = {ArticlePage} ></Route>
      </div>
    
    </div>
    </Router>
   
  );
}

export default App;
