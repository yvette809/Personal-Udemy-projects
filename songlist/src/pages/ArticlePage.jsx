import React from 'react';
import articleContent from './article-content';

const ArticlePage = (props)=> {
   
  const name = props.match.params.name;
  // we are finding the article whose name is equal to the name we get from the url parameters
  const article = articleContent.find(article => article.name === name)
  if(!article) return <h1>Artcicle doe not exist!</h1>
    return(
        <>
        <h1 >{article.title}</h1>
       {article.content.map((paragraph,i) =>(
           <p key = {i}>{paragraph}</p>
       ))}
       </>
    )
    
   

}
   
export default ArticlePage