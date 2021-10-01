import { connect } from 'react-redux';
import { follow, unfollow } from '../../redux/user-reducer';
import HomePage from './HomePage'

const mapStateToProps = (state) => {
    return {
        connections: state.profilePage.connections,
        recommendedUsers: state.profilePage.recommendedUsers,
        profileInfo: state.homePage.profileInfo,
    }
}

const HomePageContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
    }
)(HomePage)

export default HomePageContainer;