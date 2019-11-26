import React, {Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import './css/bootstrap.min.css';
import textval from './components/text.js' ;
import marked from 'marked' ;
let NotreText ;
class App extends Component {

  state= {
    text : textval  
  }

changeHandle(e){
const text= e.target.value ;
this.setState({text:text})

}

getMarkdownText(text){

var rawMarkup = marked(text) ;
return { __html: rawMarkup };

 
}




 render() {
   return(
    <div className="App">
  <div className="container"> 
  <div className="row">
  <div className="col-sm-12">
<h1>  React App </h1>
<h2>  Par Marouane </h2>

  </div>

  </div>

  <div className="row">
<div className="col-sm-6">
<textarea value={this.state.text}></textarea>

</div>
<div className="col-sm-6" dangerouslySetInnerHTML={this.getMarkdownText(this.state.text)}></div>
</div>
 
  </div>
 </div>
   )
}
}
export default App ;
