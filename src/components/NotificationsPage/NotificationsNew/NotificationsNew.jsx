import style from './NotificationsNew.module.css'

function NotificationsNew(props) {
    return (
        <div className={style.notificationsNew}>
            <h1>Notifications</h1>
            <p>You’re all caught up! Check back later for new notifications</p>
        </div>
    );
}

export default NotificationsNew