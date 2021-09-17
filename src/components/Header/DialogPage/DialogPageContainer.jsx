import { connect } from 'react-redux';
import DialogPage from './DialogPage'

const mapStateToProps = (state) => {
    return {
        jobAdvertisement: state.dialogPage.jobAdvertisement,
        dialogUsers: state.dialogPage.dialogUsers,
        messages: state.dialogPage.messages,
    }
}

const DialogPageContainer = connect(mapStateToProps)(DialogPage)

export default DialogPageContainer;