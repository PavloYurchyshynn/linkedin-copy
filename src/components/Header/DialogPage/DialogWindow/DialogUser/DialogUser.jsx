import style from './DialogUser.module.css'
import { NavLink } from 'react-router-dom'

function DialogUser(props) {

    return (
        <div className={style.dialog}>
            <NavLink to={`/dialogs/${props.user.name}`}>
                {props.user.name}
            </NavLink>
        </div>
    );
}

export default DialogUser;