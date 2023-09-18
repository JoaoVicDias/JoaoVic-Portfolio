import Laptop from '../../img/laptop.png'

import classes from './index.module.css'

const banner = () => (
    <section className={classes.computer__image}>
        <div className={classes.banner__context}>
            <h1 className={classes.banner__context__name} >João Victor Dias</h1>
            <p className={classes.banner__context__occupation}>Fullstack Developer</p>
            <img className={classes.code_img} src={Laptop} alt="Computer and code"></img>
        </div>
    </section>
)

export default banner