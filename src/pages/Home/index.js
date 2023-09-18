import { useCallback, useState } from 'react'

import Header from '../../components/header'
import Banner from '../../components/banner'
import AboutMe from '../../components/aboutme'
import Services from '../../components/services'
import Skills from '../../components/skills'
import Work from '../../components/work'
import Contact from '../../components/contact'
import Footer from '../../components/footer/footer'

const Home = () => {
    const [responsiveMenu, setResponsiveMenu] = useState(false)

    const onToggleResponsiveMenuHandler = useCallback(() => {
        setResponsiveMenu((prevState) => !prevState)
    }, [])

    return (
        <>
            <Header
                onToggle={onToggleResponsiveMenuHandler}
                responsiveMenu={responsiveMenu}
            />
            <main>
                <Banner />
                <AboutMe />
                <Services />
                <Skills />
                <Work />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default Home