import { connect } from 'react-redux'
import { follow, unfollow } from '../../../../redux/home-reducer'
import style from './ProfileRecommendations.module.css'
import RecUser from './RecUser/RecUser'

function ProfileRecommendations(props) {

    let recUsers = props.users

    let userElement = recUsers.map(u => <RecUser user={u} follow={props.follow} unfollow={props.unfollow} />)

    return (
        <div className={style.profileFeed}>
            <h1>Add to your feed</h1>
            {userElement}
        </div>
    )
}

let mapStateToProps = (state) => ({
    users: state.homePage.users
})


export default connect(mapStateToProps,
    {
        follow,
        unfollow,
    }
)(ProfileRecommendations)