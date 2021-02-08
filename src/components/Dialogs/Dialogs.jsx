import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name} </NavLink>
            </div>
        </div>
    )
}
// export default Dialog;

const MessageItem = (props) => {

    return (

        <div className={s.message}>{props.message}</div>
    )
}





const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: "Kirill" },
        { id: 2, name: "Sergey" },
        { id: 3, name: "Bogdan" },
        { id: 4, name: "Mira" },
        { id: 5, name: "Jack" },
        { id: 6, name: "London" }
    ]

    let messagesData = [
        { id: 1, message: "Good morning" },
        { id: 2, message: "Hi you are owesome" },
        { id: 3, message: "Do not jouke with me" },
    ]
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
                </div>


                <div className={s.messages}>
                    <MessageItem message={messagesData[0].message} id={messagesData[0].id} />
                    <MessageItem message={messagesData[1].message} id={messagesData[1].id} />
                    <MessageItem message={messagesData[2].message} id={messagesData[2].id} />
                    {/* <div className={s.message}>Good morning</div>
                    <div className={s.message}>Hi you are owesome</div>
                    <div className={s.message}>Do not jouke with me</div> */}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;