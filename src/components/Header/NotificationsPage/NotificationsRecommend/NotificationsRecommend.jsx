import style from './NotificationsRecommend.module.css'

function NotificationsRecommend(props) {
    return (
        <div className={style.notificationsRecommend}>
            <img src={props.jobAdvertisement} />
        </div>
    );
}

export default NotificationsRecommend