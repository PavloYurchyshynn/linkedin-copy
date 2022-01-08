import style from './DialogMessage.module.css'

function DialogMessage(props) {

    return (
        <div className={style.dialogMessage}>
            <img src={props.e.photo} />
            <div>
                <div className={style.name}>{props.e.name}</div>
                <div className={style.message}>{props.e.message}</div>
            </div>
        </div>
    );
}

export default DialogMessage;