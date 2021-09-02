import style from './HomePage.module.css'
import ProfileRecommendations from './ProfileRecommendations/ProfileRecommendations';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePosts from './ProfilePosts/ProfilePosts';

function HomePage(props) {
    return (
        <div className={style.profilePage}>
            <ProfileInfo/>
            <ProfilePosts/>
            <ProfileRecommendations/>
        </div>
    );
}

export default HomePage;