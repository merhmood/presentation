import React from 'react'

import './PostsList.css'

const PostsList = props => {
    return (
        <div className='container-postlist'>
            <h3>Lastest Posts</h3>
            {props.postlist.map((post)=>{
                return(
                    <div className='PostList'>
                        <img src={post.img}></img>
                        <h4>{post.title}</h4>
                        <p>{post.details}</p>
                    </div>
                );
            })}
        </div>

    )
}
export default PostsList