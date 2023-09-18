import classes from './index.module.css'

const servicesItem = ({ link, title, context }) => (
    <article className={classes.services} >
        <div className={classes.services__item__img}>
            <img src={link} alt="services images"></img>
        </div>
        <div >
            <h4 className={classes.services__item__title}>{title}</h4>
            <p className={classes.services__item__context}>{context}</p>
        </div>
    </article>
)

export default servicesItem