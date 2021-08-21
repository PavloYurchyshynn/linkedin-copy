import style from './ProfileInfo.module.css'

function ProfileInfo(props) {
    return (
        <div className={style.profileInfo}>
            <div>
                <img src={props.state.homePage.profileInfo.userPhoto} className={style.userImg} />
            </div>
            <div>{props.state.homePage.profileInfo.userName}</div>
            <div>{props.state.homePage.profileInfo.userPosition}</div>
            <div>Connections: {props.state.homePage.profileInfo.userConections}</div>
            <div>Try Premium for free</div>
            <div>My items</div>
        </div>
    )
}

export default ProfileInfo