import React, {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import './css/bootstrap.min.css';
import About from './Components/AboutPage';
import Home from './Components/Home' ; 
import { BrowserRouter as Router ,Route, Switch} from 'react-router-dom' ; 
import NavBar from './NavBar' ;
import ArticlesListPages from './Components/ArticlesListPages';
import ArticlesPages from './Components/ArticlesPages';

class App extends Component {

   
 render() {
   return(
  
     <div>
  

<Router>
<NavBar/>
<Switch>
               
<Route  exact path='/' component={Home} />
<Route exact path='/articles' component={ArticlesListPages}  />
<Route exact path='/articles/:name' component={ArticlesPages}  />

<Route exact path='/about' component={About}  />
</Switch>           
</Router>
    
            
             </div>
            



   )
}

}
export default App ;
/*
 */ 