import style from './DialogWindow.module.css'
import DialogUser from './DialogUser/DialogUser';
import { useEffect } from 'react';
import DialogMessage from './DialogMessage/DialogMessage';

function DialogWindow(props) {

    let dialogId = props.dialogId;
    if (!dialogId) {
        dialogId = 1;
    }

    useEffect(() => {
        props.getMessages(dialogId)
    }, [dialogId])

    let message = props.message;
    let messagesElement = message.map(e => <DialogMessage e={e} />)
    let dialogUsers = props.dialogUsers;
    let dialogElement = dialogUsers.map(e => <DialogUser user={e} />)

    return (
        <div className={style.dialogWindow}>
            <div className={style.dialogUsers}>
                <div className={style.dialogHeading}>
                    Messaging
                    <img src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png' />
                </div>
                <div>
                    {dialogElement}
                </div>
            </div>
            <div className={style.messages}>
                <div>
                    {messagesElement}
                    <input
                        type="text"
                        placeholder='Write a message...'
                    />
                </div>
            </div>
        </div>
    );
}

export default DialogWindow;