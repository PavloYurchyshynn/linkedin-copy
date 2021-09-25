import style from './HomePage.module.css'
import ProfileRecommendations from './ProfileRecommendations/ProfileRecommendations';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePosts from './ProfilePosts/ProfilePosts';

function HomePage(props) {
    return (
        <div className={style.profilePage}>
            <ProfileInfo
                userPhoto={props.userPhoto}
                userName={props.userName}
                userPosition={props.userPosition}
                connections={props.connections}
            />
            <ProfilePosts
                userPhoto={props.userPhoto}
            />
            <ProfileRecommendations
                follow={props.follow}
                unfollow={props.unfollow}
                users={props.users}
            />
        </div>
    );
}

export default HomePage;