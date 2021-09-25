import { NavLink } from 'react-router-dom'
import style from './ProfileInfo.module.css'

function ProfileInfo(props) {
    return (
        <div className={style.profileInfo}>
            <div>
                <NavLink to='/home/user'>
                    <img src={props.userPhoto} className={style.userImg} />
                    <h1>{props.userName}</h1>
                </NavLink>
                <p>{props.userPosition}</p>
            </div>
            <div className={style.connections}>
                <NavLink to='/mynetwork'>
                    <div>
                        <span>Connections:</span> <span className={style.userConections}>{props.connections.length}</span>
                    </div>
                    <div className={style.network}>Grow your network</div>
                </NavLink>
            </div>
            <div><h2>Try Premium for free</h2></div>
            <div><h2>My items</h2></div>
        </div>
    )
}

export default ProfileInfo