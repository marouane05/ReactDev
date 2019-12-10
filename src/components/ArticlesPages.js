import React, { Component } from 'react'
import Articles from '../articles'
import ArticlesListPages from './ArticlesListPages'

class ArticlesPages extends Component {
 
    render() {
            const name= this.props.match.params.name ;
        console.log(this.props)
        return (
            
            <div>
                <h1>Articles name: {this.props.match.params.name} </h1>
              
         {
                    Articles.map((article)=> article.name == this.props.match.params.name ? <div> le titre : {article.titre} paragraphe: {article.paragraphes}</div> : 'Not Found' )
                }

{




}


           
            </div>
        )
    }
}


export default ArticlesPages;