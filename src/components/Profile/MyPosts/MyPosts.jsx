import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsData = [
        { id: 1, message: "Good morning" },
        { id: 2, message: "Hi you are owesome" },
        { id: 3, message: "Do not jouke with me" }
    ]


    return (


        <div className={s.item}>
            My post
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} id={postsData[0].id} />
                <Post message={postsData[1].message} id={postsData[1].id} />
            </div>
        </div>

    )
}

export default MyPosts;