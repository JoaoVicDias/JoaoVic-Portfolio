
import classes from './index.module.css'

const WorkItem = ({ title, companyName, initDate, endDate, description }) => (
    <article className={classes.work_item__article}>
        <h2>{title}</h2>
        <div className={classes.work_item__div}>
            <span className={classes.work_span__company_name}>{companyName}</span>
            <span className={classes.work_span__dot}></span>
            <span className={classes.work_span__date}>{initDate} -</span>
            <span className={classes.work_span__date}> {endDate}</span>
        </div>
        <p> {description} </p>
    </article>
)

export default WorkItem