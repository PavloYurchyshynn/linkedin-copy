import { connect } from 'react-redux';
import { follow, unfollow } from '../../redux/user-reducer';
import { getProfile } from '../../redux/home-reducer';
import { getConnections, getRecommendedUsers, getViewedProfileUsers } from '../../redux/user-reducer';
import { getNotifications } from '../../redux/notifications-reducer';
import { getJobs } from '../../redux/jobs-reducer';
import { getNetworkPages, getNetworkUsers } from '../../redux/network-reducer';
import HomePage from './HomePage'

const mapStateToProps = (state) => {
    return {
        connections: state.profilePage.connections,
        recommendedUsers: state.profilePage.recommendedUsers,
        profileInfo: state.homePage.profileInfo,
        mainProfile: state.homePage.mainProfile,
    }
}

const HomePageContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        getProfile,
        getConnections,
        getNotifications,
        getJobs,
        getRecommendedUsers,
        getViewedProfileUsers,
        getNetworkPages,
        getNetworkUsers,
    }
)(HomePage)

export default HomePageContainer;