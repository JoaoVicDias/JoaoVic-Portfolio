import classes from './footer.module.css'


const footer = () => (
    <footer className={classes.footer}>
        <p>Copyright © {new Date().getFullYear()} João Victor Dias.</p>
    </footer>
)

export default footer