import style from './HomePage.module.css'
import ProfileFeed from './ProfileFeed/ProfileFeed';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfilePosts from './ProfilePosts/ProfilePosts';

function HomePage(props) {
    return (
        <div className={style.profilePage}>
            <ProfileInfo state={props.state}/>
            <ProfilePosts state={props.state}/>
            <ProfileFeed state={props.state}/>
        </div>
    );
}

export default HomePage;