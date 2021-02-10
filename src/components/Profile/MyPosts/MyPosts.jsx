import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {



    let postsElement = props.postsData.map((post) => <Post message={post.message} id={post.id} />);

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

                {postsElement}


                {/* <Post message={postsData[0].message} id={postsData[0].id} />
                <Post message={postsData[1].message} id={postsData[1].id} /> */}
            </div>
        </div>

    )
}

export default MyPosts;