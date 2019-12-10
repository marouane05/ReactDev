import React, { Component } from 'react'
import './css/bootstrap.min.css';
import  './App.css'
import { BrowserRouter as Router ,Route,Link, Switch} from 'react-router-dom' ; 

class NavBar extends Component {
    render() {
        return (
            <div>
            <div class="topnav">
  <a class="active"><Link to="/">Home</Link></a>
  <a ><Link to="/about">About</Link></a>
  <a><Link to="/articles">Articles</Link></a>
 
</div>
            </div>
        )
    }
}


export default NavBar ; 