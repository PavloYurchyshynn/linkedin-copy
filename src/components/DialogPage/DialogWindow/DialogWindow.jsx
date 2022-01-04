import style from './DialogWindow.module.css'
import { NavLink, Route } from 'react-router-dom'

function DialogWindow(props) {

    let diaolgId = props.diaolgId;
    if (!diaolgId) {
        diaolgId = 1;
    }
    let dialogUsers = props.dialogUsers;
    let userMessages = props.messages;

    let dialogElement = dialogUsers.map(e => <NavLink to={`/dialogs/${e.id}`}>{e.name}</NavLink>)
    let messageElement = userMessages.map(e => e.id === diaolgId ? <div>{e.message}</div> : <div>asdsad</div>)

    return (
        <div className={style.dialogWindow}>
            <div>
                {dialogElement}
            </div>
            <div>
                <Route path={`/dialogs/${diaolgId}`} render={() => <div>{messageElement}</div>} />
            </div>
        </div>
    );
}

export default DialogWindow;