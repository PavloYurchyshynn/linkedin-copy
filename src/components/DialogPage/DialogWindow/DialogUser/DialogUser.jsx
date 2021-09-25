import style from './DialogUser.module.css'
import { NavLink, Route, Redirect } from 'react-router-dom'

function DialogUser(props) {

    let messages = props.user.messages;
    let messageElement = messages.map(e => <div>{e.message}</div>)

    return (
        <div className={style.dialog}>
            <div className={style.dialogUser}>
                <NavLink to={`/dialogs/${props.user.name}`} activeClassName={style.active}>
                    <img src={props.user.photo} />
                    {props.user.name}
                </NavLink>
            </div>
            <div className={style.messages}>
                <Route
                    path={`/dialogs/${props.user.name}`}
                    render={() =>
                        <div className={style.message}>
                            <div>
                                <img src={props.user.photo} />
                            </div>
                            <div className={style.text}>
                                {props.user.name}
                                {messageElement}
                            </div>
                        </div>}
                />
            </div>
        </div>
    );
}

export default DialogUser;