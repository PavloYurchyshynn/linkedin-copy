import style from './ViewedUser.module.css'

function ViewedUser(props) {

    return (
        <div className={style.users}>
            <img src={props.user.photo} className={style.userPhoto} />
            <div>
                <h1>{props.user.name}</h1>
                <p>{props.user.status}</p>
                <div>
                    <button className={style.btn}>Follow</button>
                </div>
            </div>
        </div>
    );
}

export default ViewedUser;