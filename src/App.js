import React, { Component } from 'react'; 
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import { Create } from './components/Create';
import { Get } from './components/Get';
import { Update } from './components/Update';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Signup } from './components/Signup';

class App extends Component {

  


  render() {
    return (
      <Router>
      <div className="App">
        <h1>PRODUCT MANAGEMENT SYSTEM USING MERN</h1> 
        
        {/* <ul> */}
          {/* <li></li> */}
          {/* <li><Link to={'/create'}>Create</Link></li>
          <li><Link to={'/get'}>List</Link></li> */}
        {/* </ul> */}
        <hr />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path='/create' component={Create}/>
            <Route path='/get' component={Get}/>
            <Route path='/update' component={Update}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
        </Switch>
      </div>
      </Router>
    );
    
  }
}
export default App;
