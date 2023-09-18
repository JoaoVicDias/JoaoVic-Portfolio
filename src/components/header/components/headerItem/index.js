import React from 'react'

import classes from './index.module.css'

const headerItem = ({ clicked, link, children }) => <li className={classes.header__item}><a onClick={clicked} href={link}>{children}</a></li>

export default headerItem