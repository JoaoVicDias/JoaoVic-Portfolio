import classes from './index.module.css'

const Section = ({ title, darker, items, ChildrenComponent, children, ...rest }) => (
    <section className={classes.section} style={{ backgroundColor: darker && "#000" }} {...rest}>
        <h1 className={classes.section__title}>{title}</h1>
        <div className={classes.section__content}>
            {children}
            {items && items.length > 0 && items.map(item => <ChildrenComponent {...item} />)}
        </div>
    </section>
)

export default Section