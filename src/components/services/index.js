import ServicesItem from './servicesItem'
import Section from '../section'

import ResponsiveIMG from '../../img/services/responsive.png'
import CreativeIMG from '../../img/services/web-design.png'
import WebProgramminIMG from '../../img/services/web-programming.png'

const Services = () => {
    const servicesItems = [
        { key: 1, link: WebProgramminIMG, title: "Fullstack Developer", context: "I develop projects with JavaScript, ReactJs, NodeJs, Ruby on Rails and Java."},
        { key: 2, link: ResponsiveIMG, title: "Enthusiastic", context: "Always excited to learn new technologies." },
        { key: 3, link: CreativeIMG, title: "Problem solver", context: "Always creative to solve any problem as a programmer." }
    ]

    return (
        <Section id="services" title="Services" darker items={servicesItems} ChildrenComponent={ServicesItem} />
    )
}


export default Services