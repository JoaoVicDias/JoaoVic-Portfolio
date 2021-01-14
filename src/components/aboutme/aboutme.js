import classes from './aboutme.module.css'
import WebDev from '../img/web_dev.png'




const aboutme = ()=>{
    return(
        <section id="about" className={classes.aboutme}>
            <h1 className={classes.aboutme__main__information}>SOBRE MIM</h1>
            <article className={classes.aboutme__main__components}>
                <div className={classes.aboutme__main__text}>
                    <h2 className={classes.aboutme__main__title}>Hello World!</h2>
                    <p className={classes.aboutme__main__context}>Desenvolvedor Front-End com foco no usuário há 2 anos. 
                    Com conhecimentos para desenvolver websites ou aplicações web utilizando tecnologias regulares (JavaScript, CSS, HTML)
                     ou avançadas como ReactJS. Sempre buscando performace, código limpo, boas práticas e resolver problemas.<br/>
                      Minhas maiores paixões são café, livros (principalmente de historia), natureza e jogos.  </p>
                    <a href="https://docs.google.com/uc?export=download&id=150yB3hC2fX7e7mid9bh5CTFE2y20k_sg" 
                    className={classes.aboutme__main__download}>DOWNLOAD CURRÍCULO</a>
                </div>
                <div className={classes.aboutme__main__img} >
                    <img src={WebDev} alt="Web Developer"></img>
                </div>
            </article>
        </section>
    )
}


export default aboutme