import React from 'react'
import './About.scss'
import Homeimg from '../../assets/Images/Home.jpg'
import Header from '../../Components/Header/Header'
import Howstarted from '../Home/subHome/Howstarted'
import Mission from '../Home/subHome/Mission'
import Vision from '../Home/subHome/Vision'
import Footer from '../../Components/Footer/Footer'
export default function About() {
  return (
    <div className='About-Page'>
        <Header/>
        <div className="Main-ABout">

        <img src={Homeimg} alt="" />
        <div className="content">

        <h1>About <span> Power fitness</span></h1>
            <p>
            World Boxing is a not-for-profit, international sports federation which aims to put the interests of boxers first and ensure that boxing remains at the heart of the Olympic movement.
</p><p>
It has been established by a group of like-minded individuals from a number of National Federations across the world in response to the persistent issues surrounding Olympic-style boxing’s international governing body, whose failure to address the International Olympic Committee’s (IOC) longstanding concerns over sporting integrity, governance, transparency and financial management has placed boxing’s future as an Olympic sport in doubt.
</p><p>
World Boxing offers an alternative to this and has been founded on the principles of integrity, honesty and excellence.  
</p><p>
The organisation is underpinned by rigorous governance practices and aims to create a sustainable and inclusive global sporting structure where boxers from around the world can compete and excel knowing that the integrity of the sport is guaranteed and competition is fair.
</p><p>
It will ensure the views of athletes are represented at the highest level and includes a male and female boxer with voting rights on its Executive Board.
</p><p>
World Boxing will provide principled leadership to its members and is committed to delivering five key pledges that will safeguard the future of both the sport and its athletes worldwide.
            </p>
        </div>
        </div>
        <Howstarted/>
        <Mission/>
        <Vision/>
        <Footer/>
    </div>
  )
}
