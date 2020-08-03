import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {createPost} from '../components/actions/postActions'


class PostForm extends React.Component{
    state={
        title:"",
        body: "",
    }

    submit= (e)=>{
        e.preventDefault();
        const post = {
            title:this.state.title,
            body:this.state.body
        };
        this.props.createPost(post);
    }
    // submit = async (e)=>{
    //     e.preventDefault()
    //     const post = {
    //         title:this.state.title,
    //         body:this.state.body
    //     }

    //     let reponse = await fetch ("https://jsonplaceholder.typicode.com/posts",{
    //         method: "POST",
    //         headers:{
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(post)
    //     })

    //     const postR = await reponse.json()
    //     this.setState({
    //         title:"",
    //         body:""
    //     })
    // }

    render(){
        return(
            <div>
                <h1>Add Post</h1>
                <form onSubmit = {this.submit} >
                    <div>
                        <label>Title:</label><br/>
                        <input type="text" name ="title" value = {this.state.title}  onChange = {(e)=> this.setState({title:e.currentTarget.value})}/>
                    </div>
                    <div>
                        <label>Body </label><br/>
                        <textarea name="body" value ={this.state.body} onChange = {(e)=> this.setState({body:e.currentTarget.value})}/>
                    </div>
                    <br/>
                    <button type = "submit">Submit</button>
                </form>
            </div>
            
        )
    }
}

PostForm.PropTypes = {
    createPost: PropTypes.func.isRequired
}


export default connect(null,{createPost})(PostForm);