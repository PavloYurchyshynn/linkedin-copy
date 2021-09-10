import { connect } from "react-redux";
import { notSave, save } from "../../../../redux/jobs-reducer";
import style from "./JobsMain.module.css"
import RecommendedJob from "./RecommendedJob/RecommendedJob";

function JobsMain(props) {

    let recommendedJobs = props.recommendedJobs;

    let jobsElement = recommendedJobs.map(e => <RecommendedJob job={e} save={props.save} notSave={props.notSave}/>)

    return (
        <div className={style.jobsMain}>
            <div className={style.jobsHeading}>
                <h1>Recommended for you</h1>
                <div>Based on your profile and search history</div>
            </div>
            <div className={style.jobsList}>{jobsElement}</div>
        </div>
    );
}

let mapStateToProps = (state) => ({
    recommendedJobs: state.jobsPage.recommendedJobs,
})

export default connect(mapStateToProps,
    {
        save,
        notSave,
    }
)(JobsMain);