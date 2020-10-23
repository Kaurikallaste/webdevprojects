import React from 'react';
import ListPost from './ListPost';


const postsList = [
    {
        url: "/post/1",
        title: "post1"
    },
    {
        url: "/post/2",
        title: "post2"
    },
    {
        url: "/post/22222323232",
        title: "post35"
    },
    {
        url: "/post/22222323232",
        title: "post45"
    },
    {
        url: "/post/22222323232",
        title: "testpostitus"
    },
    {
        url: "/post/22222323232",
        title: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
];

const addPosts = (posts, filterStr) => {
    if (filterStr !== "") {
        var reduced = posts.reduce((result, post) => {
            if (post.title === filterStr) {
                return result.concat({
                    url: post.url,
                    title: post.title
                });
            }
            return result;
        }, []);
        return reduced.map((post) => {
            const { url, title } = post;
            return <ListPost url={url} title={title} />
        });
    }
    return postsList.map((post) => {
        const { url, title } = post;
        return <ListPost url={url} title={title} />
    });
}

const Posts = () => {
    return (
        <>
            {addPosts(postsList, "")}
        </>
    );
}

export default Posts;