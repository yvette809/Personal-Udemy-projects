import React from 'react'
import articleContent from './article-content'
import {Link} from 'react-router-dom'

const ArticlesList = ()=> (
    <>
    <h1 >Articles </h1>
    {articleContent.map((article,i )=>{
        return(
            <Link key ={i} to= {`/article/${article.name}`}>
                <h3>{article.title}</h3>
            </Link>
        )
    })}
   
    </>
)
   
export default ArticlesList