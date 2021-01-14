import classes from './contactItem.module.css'



const contactItem = props =>{

    return(
        <div className={classes.contactItem}>
            <img src={props.link} alt="Contato"></img>
            <h5 className={classes.contactItem__title}>{props.title}</h5>
            <p className={classes.contactItem__context}>{props.children}</p>
        </div>
    )
}


export default contactItem