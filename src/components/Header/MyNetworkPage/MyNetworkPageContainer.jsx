import { connect } from 'react-redux';
import { followPage, unfollowPage, connectUser, disconnectUser } from '../../../redux/network-reducer';
import MyNetworkPage from './MyNetworkPage'

const mapStateToProps = (state) => {
    return {
        userConections: state.homePage.profileInfo.userConections,
        networkPages: state.networkPage.networkPages,
        networkUsers: state.networkPage.networkUsers,
    }
}

const MyNetworkPageContainer = connect(mapStateToProps,
    {
        followPage,
        unfollowPage,
        connectUser,
        disconnectUser,
    }
)(MyNetworkPage)

export default MyNetworkPageContainer;