import classes from './index.module.css'

const Backdrop = ({ responsiveMenu, onToggle }) => (
    <div
        onClick={onToggle}
        className={`${classes.backdrop} ${responsiveMenu && classes.is_active}`}>
    </div>
)

export default Backdrop
