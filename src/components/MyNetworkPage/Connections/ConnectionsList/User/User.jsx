import style from './User.module.css'

function User(props) {

    return (
        <div className={style.user}>
            <img src={props.user.photo}/>
            <div className={style.info}>
                <h1>{props.user.name}</h1>
                <div>{props.user.status}</div>
            </div>
        </div>
    );
}

export default User;