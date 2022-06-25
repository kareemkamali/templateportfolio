import React from 'react'
import About from '../components/HomePage/About/About'
import Contact from '../components/HomePage/Contact/Contact'
import Experience from '../components/HomePage/Experience/Experience'
import HeoSection from '../components/HomePage/HeroSection/HeoSection'
import Projects from '../components/HomePage/OurProjects/Projects'
import EmailContact from '../shared/Informations/SocialMedia/EmailContact'
import SocialMedia from '../shared/Informations/SocialMedia/SocialMedia'

import MainNavigation from '../shared/NavBar/MainNavigation'

const HomePages = () => {
  return (
    <div> 
<MainNavigation/>
<HeoSection/>
<About/>
<Experience/>
<Projects/>
<Contact/>
<SocialMedia/>
<EmailContact/>
</div>

  )
}

export default HomePages