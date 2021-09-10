import JobsMain from "./JobsMain/JobsMain";
import JobsNav from "./JobsNav/JobsNav";
import JobsHelp from "./JobsHelp/JobsHelp";
import style from "./JobsPage.module.css"

function JobsPage() {
    return (
        <div className={style.jobs}>
            <JobsNav />
            <JobsMain />
            <JobsHelp />
        </div>
    );
}

export default JobsPage;