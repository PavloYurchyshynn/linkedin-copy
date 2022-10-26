import { NavLink } from 'react-router-dom';
import style from './NetworkManage.module.css';
import connections from '../../../images/icons/network.png';
import contacts from '../../../images/icons/contacts.png';
import people from '../../../images/icons/people.png';
import groups from '../../../images/icons/groups.png';
import events from '../../../images/icons/events.png';
import page from '../../../images/icons/pages.png';
import newsletters from '../../../images/icons/newsletters.png';
import hashtag from '../../../images/icons/hashtag.png';

function NetworkManage(props) {
  return (
    <div className={style.networkManage}>
      <p className={style.text}>Manage my network</p>
      <NavLink to="/mynetwork/connections">
        <div className={style.item}>
          <img src={connections} />
          <div className={style.userConnections}>
            <div>Connections</div>
            <div>{props.connections.length - 1}</div>
          </div>
        </div>
      </NavLink>
      <div className={style.item}>
        <img src={contacts} />
        Contacts
      </div>
      <div className={style.item}>
        <img src={people} />
        People | Follow
      </div>
      <div className={style.item}>
        <img src={groups} />
        Groups
      </div>
      <div className={style.item}>
        <img src={events} />
        Events
      </div>
      <div className={style.item}>
        <img src={page} />
        Page
      </div>
      <div className={style.item}>
        <img src={newsletters} />
        Newsletters
      </div>
      <div className={style.item}>
        <img src={hashtag} />
        Hashtags
      </div>
    </div>
  );
}

export default NetworkManage;
