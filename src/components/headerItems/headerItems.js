import React from 'react'
import HeaderLiItem from './headerLiItem/headerLiItem'
import classes from './headerItems.module.css'



const headerItems = props =>{
    return(
        <div className={classes.header}>
             <div onClick={props.clicked} className={classes.toggle__btn}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h1 className={classes.logo}>João Victor</h1>
            <ul className={classes.header__items}>
                <HeaderLiItem link="#about">SOBRE</HeaderLiItem>
                <HeaderLiItem link="#services">SERVIÇOS</HeaderLiItem>
                <HeaderLiItem link="#skills">SKILLS</HeaderLiItem>
                <HeaderLiItem link="#projects">PROJETOS</HeaderLiItem>
                <HeaderLiItem link="#contact">CONTATO</HeaderLiItem>
            </ul>
            <div className={classes.menu__responsive} style={{transform:props.responsiveMenu ? "translateX(0)":"translateX(-100%)",opacity:props.responsiveMenu ? "1":"0"}}>
                <ul className={classes.header__items__responsive}>
                    <HeaderLiItem clicked={props.clicked} link="#about">SOBRE</HeaderLiItem>
                    <HeaderLiItem clicked={props.clicked} link="#services">SERVIÇOS</HeaderLiItem>
                    <HeaderLiItem clicked={props.clicked} link="#skills">SKILLS</HeaderLiItem>
                    <HeaderLiItem clicked={props.clicked} link="#projects">PROJETOS</HeaderLiItem>
                    <HeaderLiItem clicked={props.clicked} link="#contact">CONTATO</HeaderLiItem>
                </ul>
            </div>
        </div>
    )   
}


export default headerItems