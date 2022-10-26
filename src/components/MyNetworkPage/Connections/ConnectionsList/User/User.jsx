import { NavLink } from 'react-router-dom';
import style from './User.module.css';

function User(props) {
  return (
    <div className={style.user}>
      <NavLink to={'/home/user/' + props.user.id} className={style.link}>
        <img src={props.user.userPhoto} />
        <div className={style.info}>
          <h1>{props.user.userName}</h1>
          <div>{props.user.userPosition}</div>
          <div>{props.user.userLocation}</div>
        </div>
      </NavLink>
    </div>
  );
}

export default User;
