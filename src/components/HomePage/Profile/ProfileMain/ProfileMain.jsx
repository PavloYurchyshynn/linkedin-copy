import { NavLink } from 'react-router-dom';
import style from './ProfileMain.module.css'

function ProfileMain(props) {
    return (
        <div className={style.profileMain}>
            <div className={style.profileInfo}>
                <img src={props.connections.userPhoto} className={style.userPhoto} />
                <img src={props.connections.userBackground} className={style.background} />
                <div className={style.userInfo}>
                    <h1>{props.connections.userName}</h1>
                    <div>{props.connections.userPosition}</div>
                    <p>{props.connections.userLocation}</p>
                    <NavLink to='/mynetwork/connections'>
                        <div>{props.connections.length} connections</div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default ProfileMain;