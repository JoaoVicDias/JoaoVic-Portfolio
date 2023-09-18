
import Section from '../section'

import classes from './index.module.css'

import WebDev from '../../img/web_dev.png'

const AboutMe = () => {
    const startedYear = 2020

    return (
        <Section id="about" title="about me">
            <article className={classes.aboutme__main__text}>
                <h2 className={classes.aboutme__main__title}>Hello World!</h2>
                <p className={classes.aboutme__main__context}>A Fullstack Developer with {new Date().getFullYear() - startedYear} years of experience  🚀.
                    With knowledge to develop websites or web applications using technologies such as: ReactJS, Ruby on Rails and Java.
                    Always looking for performance, clean code, good practices and solving problems. <br />
                    My biggest passions are coffee, books (especially history), nature and games.</p>
                <a
                    href="https://docs.google.com/document/d/1G4jtCNfy_x7ckQjzOE2imVDPOsvm4vrtUg49W2rgcOk/export?format=pdf"
                    className={classes.aboutme__main__download}
                >
                    Download resume</a>
            </article>
    
            <article className={classes.aboutme__main__img} >
                <img src={WebDev} alt="Web Developer"></img>
            </article>
        </Section>
    )
}

export default AboutMe