import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import DialogPage from './DialogPage'

const mapStateToProps = (state) => {
    return {
        dialogUsers: state.dialogPage.dialogUsers,
        messages: state.dialogPage.messages,
    }
}

export default compose(
    connect(mapStateToProps),
    withRouter,
)(DialogPage)