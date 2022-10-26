import { connect } from 'react-redux';
import NotificationsPage from './NotificationsPage';

const mapStateToProps = (state) => {
  return {
    notifications: state.notificationPage.notifications
  };
};

const NotificationsPageContainer = connect(mapStateToProps)(NotificationsPage);

export default NotificationsPageContainer;
