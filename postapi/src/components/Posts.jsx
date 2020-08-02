import React, { Component } from 'react'

class Posts extends Component {

    state = {
        posts:[]
    }

    componentDidMount = async ()=>{
        let response = await fetch ("https://jsonplaceholder.typicode.com/posts")
        if(response.ok){
            let posts = await response.json()
            console.log("posts are", posts)
            this.setState({posts})
        }
        
    }


    render() {
        const postItems = this.state.posts.map(post =>(
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




export default Posts
