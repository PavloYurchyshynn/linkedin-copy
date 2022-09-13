import style from "./JobsHelp.module.css"
import manWork from '../../../images/icons/man-work.png'

function JobsHelp() {
    return (
        <div className={style.jobsHelp}>
            <p>Recommended Newsletter</p>
            <img src={manWork} />
            <h1>
                Looking for a new job? Here’s some help
            </h1>
            <p>
                By Andrew Seaman
            </p>
            <p>
                Looking for work is never easy. The process is filled with ups and downs. Fortunately, there are a few simple steps that can make the path to your next job a little easier. For example:
            </p>
            <button className={style.btn}>
                Read more
            </button>
        </div>
    );
}

export default JobsHelp;