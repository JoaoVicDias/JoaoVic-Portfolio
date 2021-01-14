import classes from './skillItem.module.css'


const skillsItem  = props =>{
    return(
        <div className={classes.skills__item}>
            <img src={props.link} alt="Tecnologias"></img>
            <h5>{props.context}</h5>
        </div>
    )
}

export default skillsItem