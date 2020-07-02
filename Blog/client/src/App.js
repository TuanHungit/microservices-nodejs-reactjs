import React from 'react';
import PostList from './PostList';
import PostCreate from './PostCreate';

export default()=>{
    return <div className="container">
        <h1>Create Post</h1>
        <PostCreate/>
        <h1>Posts</h1>
        <PostList/>
    </div>;
}