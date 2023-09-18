import { RxHamburgerMenu } from 'react-icons/rx'

import Backdrop from '../../components/backdrop'
import HeaderList from './components/headerList'

import classes from './index.module.css'

const Header = ({ onToggle, responsiveMenu }) => (
    <>
        <Backdrop
            onToggle={onToggle}
            responsiveMenu={responsiveMenu}
        />

        <header className={classes.header}>
            <RxHamburgerMenu className={classes.toggle__btn} onClick={onToggle} />

            <h1 className={classes.logo}>João Victor</h1>

            <HeaderList responsiveMenu={responsiveMenu} onToggle={onToggle} />
        </header>
    </>
)
export default Header