import classes from './projectsItem.module.css'


const projectsItem = props =>{

    const classesName = [classes.projects__item]
    if(props.classItem === "burguerBuilder") classesName.push(classes.burger__builder__img)
    if(props.classItem === "agenda") classesName.push(classes.agenda)
    if(props.classItem === "siteJogos") classesName.push(classes.site__jogos)
    if(props.classItem === "cloneProgramathor") classesName.push(classes.clone__programathor)

    return(
        <div className={classesName.join(' ')}>
            {props.children}
        </div>  
    )
}


export default projectsItem
