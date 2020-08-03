import React from 'react'
import {Link} from 'react-router-dom'

const ArticlesList = (props)=>(
    
    <>
    
    {props.articles.map((article,i )=>{
        return(
            <Link key ={i} to= {`/article/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0,150)}...</p>
            </Link>
        )
    })}
   
    </>
    
)


export default ArticlesList