import React from 'react';

const ListPost = (props) => {
    const { url, title } = props;
    return (
        <>
            <a href={url}>
                <div className={"post-list-card"}>
                    <h2>{title}</h2>
                </div>
            </a>
        </>
    );
}
export default ListPost;