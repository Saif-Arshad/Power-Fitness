import React from 'react'
import './Home.scss'
import Intro from './subHome/intro'
import Header from '../../Components/Header/Header'
import Vision from './subHome/Vision'
import Mission from './subHome/Mission'
import Howstarted from './subHome/Howstarted'
import Footer from '../../Components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Header/>
      <Intro/>
      <Howstarted/>
      <Mission/>
      <Vision/>
      <Footer/>
    </div>
  )
}
