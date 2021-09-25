import { Route } from 'react-router';
import DialogUser from './DialogUser/DialogUser';
import style from './DialogWindow.module.css'

function DialogWindow(props) {

    let dialogUsers = props.dialogUsers;

    let dialogElement = dialogUsers.map(e => <DialogUser user={e} />)

    return (
        <div className={style.dialogWindow}>
            <div className={style.text}>Messaging</div>
            <div className={style.dialogMain}>
                <div>
                    {dialogElement}
                </div>
            </div>
        </div>
    );
}

export default DialogWindow;