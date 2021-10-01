import JobAdvertisement from '../../../JobAdvertisement/JobAdvertisement';
import style from './ProfileSide.module.css'
import ViewedUser from './ViewedUser/ViewedUser';

function ProfileSide(props) {

    let viewedUsers = props.viewedProfileUsers

    let userElement = viewedUsers.map(u => <ViewedUser user={u}/>)

    return (
        <div className={style.profileSide}>
            <JobAdvertisement />
            <div className={style.viewedUsers}>
                <h1>People also viewed</h1>
                {userElement}
            </div>
        </div>
    );
}

export default ProfileSide;