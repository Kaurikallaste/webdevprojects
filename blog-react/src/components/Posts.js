import React from 'react';
import ListPost from './ListPost';

const Posts = () => {

    return (
        <>
            <ListPost url="/post/1" title="post1" />
            <ListPost url="/post/2" title="post2" />
            <ListPost url="/post/35" title="post35" />
        </>
    );
}

export default Posts;