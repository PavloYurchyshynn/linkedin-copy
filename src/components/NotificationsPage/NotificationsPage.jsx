import JobAdvertisement from '../JobAdvertisement/JobAdvertisement';
import NotificationsMain from './NotificationsMain/NotificationsMain';
import NotificationsNew from './NotificationsNew/NotificationsNew';
import style from './NotificationsPage.module.css'

function NotificationsPage(props) {
    return (
        <div className={style.notifications}>
            <NotificationsNew />
            <NotificationsMain
                notifications={props.notifications}
            />
            <JobAdvertisement />
        </div>
    );
}

export default NotificationsPage