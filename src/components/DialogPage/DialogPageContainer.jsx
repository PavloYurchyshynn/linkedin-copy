import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getMessages } from '../../redux/message-reducer';
import DialogPage from './DialogPage'

const mapStateToProps = (state) => {
    return {
        dialogUsers: state.dialogPage.dialogUsers,
        message: state.dialogPage.message,
    }
}

export default compose(
    connect(mapStateToProps, { getMessages }),
    withRouter
)(DialogPage)