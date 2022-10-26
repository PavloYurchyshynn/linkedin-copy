import { NavLink } from 'react-router-dom';
import style from './ProfileInfo.module.css';

function ProfileInfo(props) {
  return (
    <div className={style.profileInfo}>
      <div className={style.profile}>
        <img src={props.profileInfo.userBackground} className={style.userBackground} />
        <NavLink to="/home/user">
          <img src={props.profileInfo.userPhoto} className={style.userImg} />
          <h1>{props.profileInfo.userName}</h1>
        </NavLink>
        <p>{props.profileInfo.userPosition}</p>
      </div>
      <div className={style.connections}>
        <NavLink to="/mynetwork">
          <div>
            <span>Connections:</span>{' '}
            <span className={style.userConections}>{props.connections.length - 1}</span>
          </div>
          <div className={style.network}>Grow your network</div>
        </NavLink>
      </div>
      <div>
        <h2>Try Premium for free</h2>
      </div>
      <div>
        <h2>My items</h2>
      </div>
    </div>
  );
}

export default ProfileInfo;
