import style from './Profile.module.css'
import ProfileMain from './ProfileMain/ProfileMain';
import ProfileSide from './ProfileSide/ProfileSide';

function Profile(props) {

    let userId = props.match.params.userId;
    if (!userId) {
        userId = 1;
    }

    return (
        <div className={style.profile}>
            <ProfileMain
                connections={props.connections[userId - 1]}
            />
            <ProfileSide viewedProfileUsers={props.viewedProfileUsers} />
        </div>
    );
}

export default Profile;