import style from "./JobsHelp.module.css"

function JobsHelp() {
    return (
        <div className={style.jobsHelp}>
            <p>Recommended Newsletter</p>
            <img src="https://img4.cliparto.com/pic/xl/231269/7016849-diagram-report-man-working-with-computer.jpg" />
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