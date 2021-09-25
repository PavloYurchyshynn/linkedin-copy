import { connect } from 'react-redux';
import { follow, unfollow } from '../../redux/home-reducer';
import HomePage from './HomePage'

const mapStateToProps = (state) => {
    return {
        users: state.homePage.users,
        userPhoto: state.homePage.profileInfo.userPhoto,
        userName: state.homePage.profileInfo.userName,
        userPosition: state.homePage.profileInfo.userPosition,
        connections: state.networkPage.connections,
    }
}

const HomePageContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
    }
)(HomePage)

export default HomePageContainer;