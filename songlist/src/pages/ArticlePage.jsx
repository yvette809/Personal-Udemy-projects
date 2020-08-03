import React from 'react';
import articleContent from './article-content';
import ArticlesList from  '../components/ArticlesList'
import NotFoundPage from './NotFoundPage'

const ArticlePage = (props)=> {
   
  const name = props.match.params.name;
  // we are finding the article whose name is equal to the name we get from the url parameters
  const article = articleContent.find(article => article.name === name)
  if(!article) return <NotFoundPage/>

  const otherArticles = articleContent.filter(article=> article.name !== name)
    return(
        <>
        <h1 >{article.title}</h1>
       {article.content.map((paragraph,i) =>(
           <p key = {i}>{paragraph}</p>
       ))}
            <h3>Other Articles</h3>
           <ArticlesList articles = {otherArticles}/>
       </>
    )
    
   

}
   
export default ArticlePage