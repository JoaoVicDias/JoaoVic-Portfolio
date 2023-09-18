import HeaderItem from '../headerItem'

import classes from './index.module.css'

const HeaderList = ({ onToggle, responsiveMenu }) => {

    const items = [
        { link: "#about", label: "About Me" },
        { link: "#services", label: "Services" },
        { link: "#skills", label: "Skills" },
        { link: "#Work", label: "Work" },
        { link: "#contact", label: "Contact" },
    ]

    return (
        <ul
            className={classes.header__items}
            style={{ transform: responsiveMenu ? "translateX(0)" : "translateX(-100%)", opacity: responsiveMenu ? "1" : "0" }}
        >
            {items.map((item) => <HeaderItem key={item.link} link={item.link} clicked={onToggle}> {item.label} </HeaderItem>)}
        </ul>
    )
}

export default HeaderList