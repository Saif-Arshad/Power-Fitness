import React from 'react'
import {Link} from "react-router-dom";
import './Footer.scss'
export default function Footer() {
  return (
   <footer>
    <div className="upperside">
    <h1>Ready for <span>Next</span> lesson?</h1>

    </div>
    <div className="downside">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Saifarshad3344@gmail.com</span>
        <span>
        <Link to="/Termsandconditions">Terms and conditions</Link>
        <Link to="/privacy">Privacy Policy</Link>
        </span>
    </div>
   </footer>
  )
}
