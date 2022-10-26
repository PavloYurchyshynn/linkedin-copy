import { connect } from 'react-redux';
import { save, notSave } from '../../redux/jobs-reducer';
import JobsPage from './JobsPage';

const mapStateToProps = (state) => {
  return {
    recommendedJobs: state.jobsPage.recommendedJobs
  };
};

const JobsPageContainer = connect(mapStateToProps, {
  save,
  notSave
})(JobsPage);

export default JobsPageContainer;
