import React from 'react'
import classes from './headerLiItem.module.css'


const headerLiItem = props =>{
    return <li className={classes.header__item}><a onClick={props.clicked} href={props.link}>{props.children}</a></li>
}


export default headerLiItem