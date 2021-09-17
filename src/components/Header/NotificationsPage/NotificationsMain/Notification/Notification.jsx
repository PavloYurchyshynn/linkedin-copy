import style from './Notification.module.css'

function Notification(props) {

    return (
        <div className={style.notification}>
            <img src={props.notification.photo}/>
            <div className={style.text}>
                {props.notification.text}
            </div>
        </div>
    );
}

export default Notification