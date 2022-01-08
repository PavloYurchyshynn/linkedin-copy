import { NavLink } from 'react-router-dom';
import style from './DialogUser.module.css'

function DialogUser(props) {

    return (
        <div className={style.dialogUser}>
            <NavLink to={'/dialogs/' + props.user.id} activeClassName={style.active}>
                <img src={props.user.photo} />
                <div>
                    <div>{props.user.name}</div>
                    <div className={style.status}>{props.user.status}</div>
                </div>
            </NavLink>
        </div>
    );
}

export default DialogUser;