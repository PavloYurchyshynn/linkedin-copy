import { Route } from 'react-router';
import DialogUser from './DialogUser/DialogUser';
import style from './DialogWindow.module.css'

function DialogWindow(props) {

    let dialogUsers = props.dialogUsers;
    let messages = props.messages;

    let dialogElement = dialogUsers.map(e => <DialogUser user={e} />)
    let messageElement = messages.map(e => <div>{e.message}</div>)

    return (
        <div className={style.dialogWindow}>
            <div className={style.text}>Messaging</div>
            <div className={style.dialogMain}>
                <div>
                    {dialogElement}
                </div>
                <div className={style.messages}>
                    <div className={style.name}>
                        <Route
                            path={`/dialogs/${dialogElement.name}`}
                            render={() => <div>{dialogElement.name}</div>}
                        />
                    </div>
                    <div className={style.message}>
                        <Route
                            path={`/dialogs/${dialogElement.name}`}
                            render={() => <div>{messageElement}</div>}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DialogWindow;