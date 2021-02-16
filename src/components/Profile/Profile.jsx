import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts postsData={props.profilePage.postsData} updateNewPostText={props.updateNewPostText} newPostText={props.profilePage.newPostText} addPost={props.addPost} />

        </div >
    )
}

export default Profile;