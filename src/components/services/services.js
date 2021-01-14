import classes from './services.module.css'
import ServicesItem from './servicesItem/servicesItem'
import ResponsiveIMG from '../img/services/responsive.png'
import CreativeIMG from '../img/services/web-design.png'
import WebProgramminIMG from '../img/services/web-programming.png'


const servicos = () =>{
    return(
        <section id="services" className={classes.services}>
            <h1 className={classes.services__title}>SERVIÇOS</h1>
            <div className={classes.services__items}>
                <ServicesItem link={WebProgramminIMG} title="Desenvolvedor Front-End" 
                context="Desenvolvo projetos com JavaScript,ReactJs,CSS,HTML."/>
                <ServicesItem link={ResponsiveIMG} title="WebSite Responsivo" 
                context="Criação de websites compatíveis com todos os dispositivos."/>
                <ServicesItem link={CreativeIMG} title="Resolvedor de problemas" 
                context="Sempre criativo para resolver qualquer problema como programador."/>
               
            </div>
        </section>
    )
}


export default servicos