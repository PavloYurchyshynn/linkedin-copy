import { connect } from 'react-redux'
import style from './ProfileInfo.module.css'

function ProfileInfo(props) {
    return (
        <div className={style.profileInfo}>
            <div>
                <img src={props.userPhoto} className={style.userImg} />
                <h1>{props.userName}</h1>
                <p>{props.userPosition}</p>
            </div>
            <div>
                <div className={style.connections}>
                    <p>Connections:</p> <p className={style.userConections}>{props.userConections}</p>
                </div>
                <h2>Grow your network</h2>
            </div>
            <div><h2>Try Premium for free</h2></div>
            <div><h2>My items</h2></div>
        </div>
    )
}

export default ProfileInfo