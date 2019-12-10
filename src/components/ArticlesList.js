import React, { Component } from 'react'
import { BrowserRouter as Router ,Route, Switch,Link,Redirect} from 'react-router-dom' ; 
class ArticlesPages extends Component {
    onSubmit = () => {

            return  <Redirect  to='/articles/one' />
        
     }
   
    render() {
        console.log(this.props)
        return (
            <div>
             {this.props.articles.map((article)=>  <button Onclick={this.onSubmit}> {article.name}</button>)} 
            
            </div>
        )
    }
}


export default ArticlesPages ;  