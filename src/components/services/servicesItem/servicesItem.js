import classes from './servicesItem.module.css'


const servicesItem = props =>{
    return(
        <article className={classes.services} >
        <div className={classes.services__item__img}>
            <img src={props.link} alt="services images"></img>
        </div>
       <div >
        <h4 className={classes.services__item__title}>{props.title}</h4>
        <p className={classes.services__item__context}>{props.context}</p>
       </div> 
    </article>
    )
}


export default servicesItem