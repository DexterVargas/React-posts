import React from 'react';
// import React, { Component } from 'react';
import posts from './assets/scripts/post.js'

export default class UserPostFunc extends React.Component {
    render(){
        let post = [];
        post.push(<div className='version'><h1>Class-based</h1></div>);
        for (let i = 0; i < posts.length; i++) {
            post.push(
                <div key = {i} className='post-container'>
                    <img src={posts[i].img_url} alt={posts[i].name} className='posts-img'/>
                    <div className='name-container'>
                        <h1>{posts[i].name} <span>{posts[i].created_at} </span></h1>
                        <h2>{posts[i].post}</h2>
                    </div>
                </div>
            );
        }
        return post;
    }
}

