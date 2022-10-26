import Notification from './Notification/Notification';
import style from './NotificationsMain.module.css';

function NotificationsMain(props) {
  let notifications = props.notifications;

  let notificationsElement = notifications.map((e) => (
    <Notification key={e.id} notification={e} photo={props.photo} />
  ));

  return (
    <div className={style.notificationsMain}>
      <div>{notificationsElement}</div>
    </div>
  );
}

export default NotificationsMain;
