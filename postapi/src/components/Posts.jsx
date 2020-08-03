import React, { Component } from 'react'
import {fetchPosts} from "../components/actions/postActions"
import {connect} from "react-redux"
import PropTypes from "prop-types"


class Posts extends Component {

    componentDidMount (){
        this.props.fetchPosts();
    }

    

    // state = {
    //     posts:[]
    // }

    // componentDidMount = async ()=>{
    //     let response = await fetch ("https://jsonplaceholder.typicode.com/posts")
    //     if(response.ok){
    //         let posts = await response.json()
    //         console.log("posts are", posts)
    //         this.setState({posts})
    //     }
        
    // }


    render() {
        const postItems = this.props.posts.map(post =>(
            <div key = {post.id}>
                <h3>{post.title}</h3>
                <p>post.body</p>
            </div>

        ))
        return (
            <div>
               <h1>posts</h1> 
               {postItems}
            </div>
        )
    }
}

const mapStateToProps = (state)=> state

Posts.PropTypes= {
    fetchPosts: PropTypes.func.isRequired,
    Posts:PropTypes.array.isRequired,
    newPost:PropTypes.object
}



export default connect(mapStateToProps,{fetchPosts}) (Posts)
