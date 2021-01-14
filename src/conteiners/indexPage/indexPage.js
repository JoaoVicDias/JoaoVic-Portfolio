import React,{Component} from 'react'
import classes from './indexPage.module.css'
import HeaderItems from '../../components/headerItems/headerItems'
import AboutMe from '../../components/aboutme/aboutme'
import Services from '../../components/services/services'
import Skills from '../../components/skills/skills'
import Projects from '../../components/projects/projects'
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner'



class IndexPage extends Component{
    state = {
        responsiveMenu:false
    }



    responsiveMenuAndBackdropHandler = () =>{
        this.setState({
            responsiveMenu:!this.state.responsiveMenu
        })
    }


    render(){
        return(
            <React.Fragment>
                <div onClick={this.responsiveMenuAndBackdropHandler} 
                className={classes.backdrop}
                style={{transform:this.state.responsiveMenu ? "translateY(0)":"translateY(-100%)"}} ></div>
                <header className={classes.index__page__header}>
                <HeaderItems clicked={this.responsiveMenuAndBackdropHandler} responsiveMenu={this.state.responsiveMenu}/>
                <Banner/>
                </header>
                <main>
                    <AboutMe/>
                    <Services/>
                    <Skills/>
                    <Projects/>
                    <Contact/>
                </main>
                <footer>
                <Footer/>
                </footer>
            </React.Fragment>
        )
    }
}


export default IndexPage