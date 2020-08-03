import React from "react";
import{Link} from "react-router-dom"

const NavBar = () =>(
    <nav className="bg-dark">
        <ul className= "d-flex justify-content-center " style={{listStyleType:"none"}}>
            <li className= "mx-3">
                <Link to="/">Home</Link>
            </li>
            <li  className= "mx-3">
                <Link to="/about">About</Link>
            </li>
            <li  className= "mx-3">
                <Link to="/articles-list">ArticleList</Link>
            </li>
            <li  className= "mx-3">
                <Link to="/articles">ArticlePage</Link>
            </li>


        </ul>
    </nav>
)

export default NavBar