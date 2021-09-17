import NotificationsMain from './NotificationsMain/NotificationsMain';
import NotificationsNew from './NotificationsNew/NotificationsNew';
import style from './NotificationsPage.module.css'
import NotificationsRecommend from './NotificationsRecommend/NotificationsRecommend';

function NotificationsPage(props) {
    return (
        <div className={style.notifications}>
            <NotificationsNew />
            <NotificationsMain
                notifications={props.notifications}
            />
            <NotificationsRecommend
                jobAdvertisement={props.jobAdvertisement}
            />
        </div>
    );
}

export default NotificationsPage