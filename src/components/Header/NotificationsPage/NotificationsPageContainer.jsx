import { connect } from 'react-redux';
import NotificationsPage from './NotificationsPage'

const mapStateToProps = (state) => {
    return {
        jobAdvertisement: state.notificationPage.jobAdvertisement,
        notifications: state.notificationPage.notifications,
    }
}

const NotificationsPageContainer = connect(mapStateToProps)(NotificationsPage)

export default NotificationsPageContainer;