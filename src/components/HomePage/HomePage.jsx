import style from './HomePage.module.css'
import ProfileRecommendations from './ProfileRecommendations/ProfileRecommendations';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import { useEffect } from 'react';

function HomePage(props) {

    useEffect(() => {
        props.getProfile(props.mainProfile)
        props.getConnections()
        props.getNotifications()
        props.getJobs()
        props.getRecommendedUsers()
        props.getViewedProfileUsers()
        props.getNetworkPages()
        props.getNetworkUsers()
    }, [])
    
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