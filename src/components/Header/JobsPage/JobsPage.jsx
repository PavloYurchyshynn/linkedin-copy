import JobsMain from "./JobsMain/JobsMain";
import JobsNav from "./JobsNav/JobsNav";
import JobsHelp from "./JobsHelp/JobsHelp";
import style from "./JobsPage.module.css"

function JobsPage(props) {
    return (
        <div className={style.jobs}>
            <JobsNav />
            <JobsMain
                recommendedJobs={props.recommendedJobs}
                save={props.save}
                notSave={props.notSave}
            />
            <JobsHelp />
        </div>
    );
}

export default JobsPage;