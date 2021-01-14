import classes from './skills.module.css'
import SkillsItem from './skillsItem/skillsItem'
import JavaScriptIcon from '../img/skills/javascript.svg'
import CssIcon from '../img/skills/css.svg'
import HtmlIcon from '../img/skills/html.svg'
import ReactIcon from '../img/skills/react.svg'

const skills  = () =>{
    return(
        <section id="skills" className={classes.skills}>
            <h1 className={classes.skills__title}>SKILLS</h1>
            <div className={classes.skills__items} >
                <SkillsItem link={JavaScriptIcon} context="JavaScript" />
                <SkillsItem link={CssIcon} context="CSS" />
                <SkillsItem link={HtmlIcon} context="HTML" />
                <SkillsItem link={ReactIcon} context="ReactJS" />
            </div>

        </section>
    )

}



export default skills