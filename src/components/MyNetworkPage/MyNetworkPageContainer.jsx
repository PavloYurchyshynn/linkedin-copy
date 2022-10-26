import { connect } from 'react-redux';
import { followPage, unfollowPage, connectUser, disconnectUser } from '../../redux/network-reducer';
import MyNetworkPage from './MyNetworkPage';

const mapStateToProps = (state) => {
  return {
    networkPages: state.networkPage.networkPages,
    networkUsers: state.networkPage.networkUsers,
    connections: state.profilePage.connections
  };
};

const MyNetworkPageContainer = connect(mapStateToProps, {
  followPage,
  unfollowPage,
  connectUser,
  disconnectUser
})(MyNetworkPage);

export default MyNetworkPageContainer;
