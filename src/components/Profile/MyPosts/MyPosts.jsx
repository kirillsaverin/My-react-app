import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {



    let postsElement = props.postsData.map((post) => <Post message={post.message} id={post.id} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();
    // это ссылка на ref который мы назначили textarea.
    let addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }
    // addPost этa функция передается в onClick text принимает значения текущего current значения value у textarea.

    return (


        <div className={s.item}>
            My post
            <div>
                <textarea ref={newPostElement} ></textarea>
            </div>
            <div>
                <button onClick={addPost} >Add post</button>
                {/* addPost это колбэк переданный в функцию on onClick который будет вызываться по шелчку кнопки. всю логику мы выносим перед return. и функцию мі передаем без скобок (). */}
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