import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ArticlesListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import NavBar from './NavBar'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Router>
 <div className="App">
      <div id ="page-body">
        <NavBar/>
       <Switch>
      <Route path ="/"  component = {HomePage} exact></Route>
       <Route path ="/about"  component = {AboutPage} ></Route>
       <Route path ="/articles-list"  component = {ArticlesListPage} ></Route>
       <Route path ="/article/:name"  component = {ArticlePage} ></Route>
       <Route component = {NotFoundPage} ></Route>  
    
       </Switch>
       
      </div>
    
    </div>
    </Router>
   
  );
}

export default App;
