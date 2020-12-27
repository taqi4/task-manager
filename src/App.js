import React from 'react';
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import Nav from './components/Nav'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';



function App() {
    return ( 
      <>
      <Router>
      
      <Switch>
      <Route path="/Login.js" component={Login} />
      <Route path="/"  component={Home}/>
      </Switch>
      </Router>
      
    
</>

    );
}

export default App;