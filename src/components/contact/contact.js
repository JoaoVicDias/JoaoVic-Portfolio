import classes from './contact.module.css'
import ContactItem from './contactItem/contactItem'
import GitHubIcon from '../img/contact/github.png'
import LinkedinIcon from '../img/contact/linkedin.svg'
import EmailIcon from '../img/contact/email.svg'
import CellPhoneIcon from '../img/contact/cell-phone.svg'

const contact  = props =>{
    return(
        <section id="contact"  className={classes.contact}>   
            <h1 className={classes.contact__title}>CONTATO</h1>
            <div className={classes.contact__items}>
                <ContactItem link={GitHubIcon} title="GitHub"><a rel="noreferrer" target="_blank" href="https://github.com/JoaoVicDias">João Victor-GitHub</a></ContactItem>
                <ContactItem link={LinkedinIcon} title="Linkedin"><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/joaovicd/">João Victor-Linkedin</a> </ContactItem>
                <ContactItem link={CellPhoneIcon} title="Telefone e Whatsapp"><a rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=+55%20(21)%20976493658">(21) 97649-3658</a> </ContactItem>
                <ContactItem link={EmailIcon} title="Email"><a rel="noreferrer" href="mailto:joovictordias@hotmail.com">joovictordias@hotmail.com</a></ContactItem>
               
            </div>   
        </section>  
    )
}

export default contact