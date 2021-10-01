import style from './RecUser.module.css'

function RecUser(props) {
    return (
        <div className={style.users}>
            <img src={props.user.photo} className={style.userPhoto} />
            <div>
                <h1>{props.user.name}</h1>
                <p>{props.user.status}</p>
                <div>
                    {props.user.followingStatus
                        ? <button className={style.btn} onClick={() => { props.unfollow(props.user.id) }}>Unfollow</button>
                        : <button className={style.btn} onClick={() => { props.follow(props.user.id) }}>Follow</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default RecUser