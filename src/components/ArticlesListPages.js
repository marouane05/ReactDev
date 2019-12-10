import React, { Component } from 'react'
import ArticlesList from './ArticlesList'
import  articles from '../articles'

 class ArticlesListPages extends Component {
    render() {
        return (
            <div>
                <ArticlesList articles={articles} >
                    
                </ArticlesList>
            </div>
        )
    }
}



export default ArticlesListPages ; 