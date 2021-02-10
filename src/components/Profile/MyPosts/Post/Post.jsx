import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (

        <div className={s.item}>
            <div className={s.avatar}>
                <img src="https://image.shutterstock.com/image-illustration/cartoon-monkey-isolated-on-white-260nw-58591495.jpg" />
            </div>
            <div className={s.message}>
                {props.message}
            </div>


        </div>

    )
}

export default Post;
