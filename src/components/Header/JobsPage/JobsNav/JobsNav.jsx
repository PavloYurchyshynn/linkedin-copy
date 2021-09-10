import style from "./JobsNav.module.css"

function JobsNav() {
    return (
        <div className={style.jobsNav}>
            <div className={style.items}>
                <div className={style.item}>
                    <img src="https://image.flaticon.com/icons/png/512/102/102279.png" />
                    My Jobs
                </div>
                <div className={style.item}>
                    <img src="https://image.flaticon.com/icons/png/512/1827/1827349.png" />
                    Job Alerts
                </div>
                <div className={style.item}>
                    <img src="https://image.flaticon.com/icons/png/512/4470/4470423.png" />
                    Salary
                </div>
                <div className={style.item}>
                    <img src="https://image.flaticon.com/icons/png/512/839/839860.png" />
                    Skill Assessments
                </div>
                <div className={style.item}>
                    <img src="https://image.flaticon.com/icons/png/512/60/60492.png" />
                    Interview Prep
                </div>
                <div className={style.item}>
                    <img src="https://image.flaticon.com/icons/png/512/645/645827.png" />
                    Resume Builder
                </div>
                <div className={style.item}>
                    <img src="https://image.flaticon.com/icons/png/512/503/503849.png" />
                    Application Settings
                </div>
            </div>
            <div className={style.jobPost}>
                <div className={style.item}>
                    <img src="https://image.flaticon.com/icons/png/512/1159/1159633.png" />
                    Post a free job
                </div>
            </div>
        </div>
    );
}

export default JobsNav;