import React from 'react'
import articleContent from './article-content'
import ArticlesList from  '../components/ArticlesList'

const ArticleListsPage = ()=> (
    <>
     <h3>Articles</h3>
     <ArticlesList articles ={articleContent}/>
    </>
)
   
export default ArticleListsPage