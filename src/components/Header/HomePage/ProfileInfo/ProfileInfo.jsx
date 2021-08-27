import { connect } from 'react-redux'
import style from './ProfileInfo.module.css'

function ProfileInfo(props) {
    return (
        <div className={style.profileInfo}>
            <div>
                <img src={props.userPhoto} className={style.userImg} />
            </div>
            <div>{props.userName}</div>
            <div>{props.userPosition}</div>
            <div>Connections: {props.userConections}</div>
            <div>Try Premium for free</div>
            <div>My items</div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    userPhoto: state.homePage.profileInfo.userPhoto,
    userName: state.homePage.profileInfo.userName,
    userPosition: state.homePage.profileInfo.userPosition,
    userConections: state.homePage.profileInfo.userConections,
})

export default connect(mapStateToProps)(ProfileInfo)