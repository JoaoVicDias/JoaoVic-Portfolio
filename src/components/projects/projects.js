import classes from "./projects.module.css"
import ProjectsItem from './projectsItem/projectsItem'
import GitHubIcon from '../img/github__project.svg'
import OnlineIcon from '../img/world-wide-web.png'


const projects = ()=>{

    const classNamesBurgerBuilder = [classes.info__projects,classes.burguer__builder]
    const classNamesCloneProgramathor = [classes.info__projects,classes.clone__programathor]
    const classNamesAgenda = [classes.info__projects,classes.agenda]
    const classNamesSiteJogos = [classes.info__projects,classes.site__jogos]

    return(
        <section id="projects" className={classes.projects}>
            <h1 className={classes.projects__title }>PROJETOS</h1>
            <div className={classes.projects__items}>
                <ProjectsItem classItem="burguerBuilder" >
                    <div className={classNamesBurgerBuilder.join(' ')}>
                        <h3>Burger Builder</h3>
                        <div className={classes.info__projects__items}>
                            <a target="_blank" rel="noreferrer" href="https://react-my-burguer-757a6.web.app/" className={classes.info__projects__item}><img src={OnlineIcon} alt="World Wide Web Icon"></img> - Online</a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/JoaoVicDias/React-BurgerBuilder" className={classes.info__projects__item}><img src={GitHubIcon} alt="GitHub Icon"></img> - Código</a>
                        </div>
                    </div>
                </ProjectsItem>
                <ProjectsItem classItem="cloneProgramathor" >
                    <div className={classNamesCloneProgramathor.join(' ')}>
                        <h3>Clone Programathor</h3>
                        <div className={classes.info__projects__items}>
                            <a target="_blank" rel="noreferrer" href="https://jobswebsite.herokuapp.com/" className={classes.info__projects__item}><img src={OnlineIcon} alt="World Wide Web Icon"></img> - Online</a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/JoaoVicDias/NodeJs-Jobs-Website" className={classes.info__projects__item}><img src={GitHubIcon} alt="GitHub Icon"></img> - Código</a>
                        </div>
                    </div>
                </ProjectsItem>
                <ProjectsItem classItem="agenda" >
                    <div className={classNamesAgenda.join(' ')}>
                        <h3>Agenda</h3>
                        <div className={classes.info__projects__items}>
                            <a target="_blank" rel="noreferrer" href="https://react-my-agenda-3037a.web.app/" className={classes.info__projects__item}><img src={OnlineIcon} alt="World Wide Web Icon"></img> - Online</a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/JoaoVicDias/React-Agenda" className={classes.info__projects__item}><img src={GitHubIcon} alt="GitHub Icon"></img> - Código</a>
                        </div>
                    </div>
                </ProjectsItem>
                <ProjectsItem classItem="siteJogos" >
                    <div className={classNamesSiteJogos.join(' ')}>
                        <h3>E-commerce de jogos</h3>
                        <div className={classes.info__projects__items}>
                            <a target="_blank" rel="noreferrer" href="https://github.com/JoaoVicDias/JavaScript-Games-website" className={classes.info__projects__item}><img src={GitHubIcon} alt="GitHub Icon"></img> - Código</a>
                        </div>
                    </div>
                </ProjectsItem>
                
            </div>
        </section>  
    )
}

export default projects



