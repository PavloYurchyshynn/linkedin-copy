import style from './RecommendedJob.module.css'

function RecommendedJob(props) {
    return (
        <div className={style.item}>
            <div className={style.jobLogo}>
                <img src={props.job.jobLogo} />
            </div>
            <div className={style.jobInfo}>
                <div className={style.jobName}>{props.job.jobName}</div>
                <div>{props.job.companyName}</div>
                <div>{props.job.cityAndCountry}</div>
                <div>{props.job.activelyRecruitingStatus}</div>
                <div className={style.applicant}>{props.job.applicants} applicant</div>
            </div>
            <div className={style.saveStatus}>
                {props.job.saveStatus
                    ? <img src="https://image.flaticon.com/icons/png/512/1159/1159823.png"
                        onClick={() => { props.notSave(props.job.id) }} />
                    : <img src="https://image.flaticon.com/icons/png/512/1159/1159580.png"
                        onClick={() => { props.save(props.job.id) }} />}
            </div>
        </div>
    );
}

export default RecommendedJob;