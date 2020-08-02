import React, { Component } from 'react'
import {connect} from "react-redux"

const mapStateToProps = (state)=>state
const mapDispatchToProps = (dispatch)=>({
    fetchPost: (posts)=>

    dispatch({
        type: "FETCH_POSTS",
        payload: posts
       
    }),
    fetchPosts: async ()=> {
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => 
        dispatch({
            type:"FETCH_POSTS",
            payload:posts
        })

            )
    }
})



class Posts extends Component {

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




export default connect(mapStateToProps,mapDispatchToProps) (Posts)
