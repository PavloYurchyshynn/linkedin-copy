import style from './HomePage.module.css'

function HomePage(props) {
    return (
        <div className={style.profilePage}>
            <div className={style.profileInfo}>
               <div className={style.userImgDiv}><img src={props.state.homePage.profileInfo.userPhoto} className={style.userImg}/></div>
               <div>{props.state.homePage.profileInfo.userName}</div>
               <div>{props.state.homePage.profileInfo.userPosition}</div>
               <div>Connections: {props.state.homePage.profileInfo.userConections}</div>
               <div></div>
               <div></div>
            </div>
            <div className={style.profilePosts}>

            </div>
            <div className={style.profileFeed}>

            </div>
        </div>
    );
}

export default HomePage;