import classes from './index.module.css'


const skillsItem = ({ link, context }) => (
    <div className={classes.skills__item}>
        <img src={link} alt={context}/>
        <h5>{context}</h5>
    </div>
)

export default skillsItem