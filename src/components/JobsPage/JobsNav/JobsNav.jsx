import style from "./JobsNav.module.css"
import saveblack from '../../../images/icons/save-black.png'
import notification from '../../../images/icons/notification.png'
import salary from '../../../images/icons/salary.png'
import skill from '../../../images/icons/skill.png'
import prep from '../../../images/icons/prep.png'
import builder from '../../../images/icons/builder.png'
import setting from '../../../images/icons/setting.png'
import post from '../../../images/icons/post.png'

function JobsNav() {
    return (
        <div className={style.jobsNav}>
            <div className={style.items}>
                <div className={style.item}>
                    <img src={saveblack} />
                    My Jobs
                </div>
                <div className={style.item}>
                    <img src={notification} />
                    Job Alerts
                </div>
                <div className={style.item}>
                    <img src={salary} />
                    Salary
                </div>
                <div className={style.item}>
                    <img src={skill} />
                    Skill Assessments
                </div>
                <div className={style.item}>
                    <img src={prep} />
                    Interview Prep
                </div>
                <div className={style.item}>
                    <img src={builder} />
                    Resume Builder
                </div>
                <div className={style.item}>
                    <img src={setting} />
                    Application Settings
                </div>
            </div>
            <div className={style.jobPost}>
                <div className={style.item}>
                    <img src={post} />
                    Post a free job
                </div>
            </div>
        </div>
    );
}

export default JobsNav;