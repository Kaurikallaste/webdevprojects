import React from 'react';

const ListPost = (props) => {
    return (
        <>
            <a href={props.url}>
                <div className={"post-list-card"}>
                    <h2>{props.title}</h2>
                </div>
            </a>
        </>
    );
}
export default ListPost;
