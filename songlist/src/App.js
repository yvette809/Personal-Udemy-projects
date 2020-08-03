import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
    <div className="App">
     <Route path ="/"  component = {HomePage} exact>

     </Route>
    </div>
    </Router>
   
  );
}

export default App;
