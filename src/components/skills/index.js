import Section from '../section'
import SkillsItem from './skillsItem'

const Skills = () => {
    const skillItems = [
        { key: 1, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg", context: "JavaScript" },
        { key: 2, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", context: "ReactJS" },
        { key: 3, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg", context: "Ruby on Rails" },
        { key: 4, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", context: "Java" },
        { key: 5, link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", context: "NodeJS" }
    ]

    return (<Section id="skills" title="Skills" items={skillItems} ChildrenComponent={SkillsItem} />)
}

export default Skills