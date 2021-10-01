import style from './ProfileRecommendations.module.css'
import RecUser from './RecUser/RecUser'

function ProfileRecommendations(props) {

    let recUsers = props.recommendedUsers

    let userElement = recUsers.map(u => <RecUser user={u} follow={props.follow} unfollow={props.unfollow} />)

    return (
        <div className={style.profileFeed}>
            <h1>Add to your feed</h1>
            {userElement}
        </div>
    )
}

export default ProfileRecommendations