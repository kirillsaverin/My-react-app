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





    let dialogsElement = props.state.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElement = props.state.messagesData.map((messages) => <MessageItem message={messages.message} id={messages.id} />);
    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>

                    {dialogsElement}

                    {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} /> */}
                </div>


                <div className={s.messages}>

                    {messagesElement}

                    {/* <MessageItem message={messagesData[0].message} id={messagesData[0].id} />
                    <MessageItem message={messagesData[1].message} id={messagesData[1].id} />
                    <MessageItem message={messagesData[2].message} id={messagesData[2].id} /> */}
                    {/* <div className={s.message}>Good morning</div>
                    <div className={s.message}>Hi you are owesome</div>
                    <div className={s.message}>Do not jouke with me</div> */}

                    <div>
                        <textarea ref={newMessage} ></textarea>
                    </div>
                    <button onClick={addMessage} >send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;