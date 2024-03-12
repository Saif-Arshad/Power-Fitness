import React from 'react'
import './Howstarted.scss'
import About from '../../../assets/Images/about.jpg'
import More from '../../../Components/Moreabout/More'
import {Link} from "react-router-dom";
export default function Howstarted() {
  return (
    <div className='How-started-we'>
        <div className="sub-how-we-started">
            <img src={About} alt="" />
        </div>
        <div className="sub-how-we-started">
            <h1  data-aos="fade-down"
            >How we got <span> started </span> in this business </h1>
            <p>Over the years, the power fitness has created different regional titles throughout the United States and worldwide to allow small promoters and young fighters to participate. This has enabled regional and cross-regional competitions and has allowed professional boxers to work their way up through the organization’s ratings and reach the coveted world championship title.</p>
        <p>World Boxing offers an alternative to this and has been founded on the principles of integrity, honesty and excellence.  </p>
        <Link to="/about" >
        <More/>
                </Link>
        
        </div>
    </div>
  )
}
