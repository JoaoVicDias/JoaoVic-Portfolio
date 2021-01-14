import classes from './banner.module.css'
import Laptop from '../img/laptop.png'


const banner  = () =>{
    return(
            <div className={classes.banner__context}>
                <h1 className={classes.banner__context__name} >João Victor Dias</h1>
                <p className={classes.banner__context__occupation}>Front-End Developer.</p>
                <div> <img className={classes.code_img} src={Laptop} alt="Computer and coffe"></img> </div>
            </div>
    )
}


export default banner