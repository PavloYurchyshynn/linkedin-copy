import style from './HomePage.module.css'
import ProfileRecommendations from './ProfileRecommendations/ProfileRecommendations';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePosts from './ProfilePosts/ProfilePosts';

function HomePage(props) {
    return (
        <div className={style.profilePage}>
            <ProfileInfo
                profileInfo={props.profileInfo}
                connections={props.connections}
            />
            <ProfilePosts
                profileInfo={props.profileInfo}
            />
            <ProfileRecommendations
                follow={props.follow}
                unfollow={props.unfollow}
                recommendedUsers={props.recommendedUsers}
            />
        </div>
    );
}

export default HomePage;