import ContactItem from './contactItem'
import GitHubIcon from '../../img/contact/github.png'
import LinkedinIcon from '../../img/contact/linkedin.svg'
import EmailIcon from '../../img/contact/email.svg'
import CellPhoneIcon from '../../img/contact/cell-phone.svg'
import Section from '../section'

const Contact = () => {
    const contactItems = [
        { key: 1, link: GitHubIcon, title: "GitHub", href: "https://github.com/JoaoVicDias", linkContent: "João Victor-GitHub" },
        { key: 2, link: LinkedinIcon, title: "Linkedin", href: "https://www.linkedin.com/in/joaovicd/", linkContent: "João Victor-Linkedin" },
        { key: 3, link: CellPhoneIcon, title: "Telephone and Whatsapp", href: "https://api.whatsapp.com/send?phone=552120976493658", linkContent: "+55 (21) 97649-3658" },
        { key: 4, link: EmailIcon, title: "Email", href: "mailto:joovictordias@hotmail.com", linkContent: "joovictordias@hotmail.com" },
    ]

    return (
        <Section id="contact" title="Contact" items={contactItems} ChildrenComponent={ContactItem} />
    )
}

export default Contact