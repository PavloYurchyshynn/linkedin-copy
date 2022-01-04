import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Profile from './Profile'
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        viewedProfileUsers: state.profilePage.viewedProfileUsers,
        connections: state.profilePage.connections,
    }
}

export default compose(
    connect(mapStateToProps),
    withRouter,
)(Profile)