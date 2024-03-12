import React from 'react'
import './Home.scss'
import Intro from './subHome/intro'
import Header from '../../Components/Header/Header'
import Vision from './subHome/Vision'
import Mission from './subHome/Mission'

export default function Home() {
  return (
    <div>
      <Header/>
      <Intro/>
      <Vision/>
      <Mission/>
    </div>
  )
}
