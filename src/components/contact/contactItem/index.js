import classes from './index.module.css'

const contactItem = ({ link, title, href, linkContent }) => (
    <div className={classes.contactItem}>
        <img src={link} alt="Contato"></img>
        <h5 className={classes.contactItem__title}>{title}</h5>
        <p className={classes.contactItem__context}>
            <a rel="noreferrer" target="_blank" href={href}>{linkContent}</a>
        </p>
    </div>
)
export default contactItem