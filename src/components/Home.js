import React from 'react'; 
import axios from 'axios'
import { Update } from './Update';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

class Home extends React.Component{

    
    constructor(props){
        super(props);
        this.routeChange = this.routeChange.bind(this);
         
    }

       

    routeChange() {
        let path = `/signup`;
        this.props.history.push(path);
      }
      routeChangeSignup(){
        let path = `/login`;
        this.props.history.push(path);
      }
  
    render(){
       
                 return(
                     
                     <div>
                         <h1>This is home component</h1>
                        <button  className=" btn btn-primary"
                         onClick={(e)=>this.routeChange()}>Signup </button>
                         <br/><br/>
                          <button  className=" btn btn-primary"
                         onClick={(e)=>this.routeChangeSignup()}>Login </button>
                     </div>
                 )
    
       
                 }
}
             


export {Home};