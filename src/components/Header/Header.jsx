import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import home from '../../images/icons/home.png';
import network from '../../images/icons/network.png';
import jobs from '../../images/icons/jobs.png';
import message from '../../images/icons/message.png';
import notification from '../../images/icons/notification.png';
import linkedin from '../../images/icons/linkedin.png';

function Header() {
  return (
    <div className={style.header}>
      <div className={style.headerLogoInput}>
        <img src={linkedin} />
        <form>
          <input type="text" className={style.headerInput} placeholder="Search" />
        </form>
      </div>
      <div className={style.headerNav}>
        <div className={style.item}>
          <NavLink to="/home" activeClassName={style.active}>
            <img src={home} />
            <div>Home</div>
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/mynetwork" activeClassName={style.active}>
            <img src={network} />
            <div>MyNetwork</div>
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/jobs" activeClassName={style.active}>
            <img src={jobs} />
            <div>Jobs</div>
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/dialogs" activeClassName={style.active}>
            <img src={message} />
            <div>Messaging</div>
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/notifications" activeClassName={style.active}>
            <img src={notification} />
            <div>Notifications</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
