import React from 'react';
import './Location.scss';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

export default function Location() {
  return (
    <div className='location'>
        <Header/>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1744090.2173265973!2d72.05750479375001!3d31.374809600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919a832200d40e3%3A0x235961e999001930!2sPower%20Muscles%20Gym!5e0!3m2!1sen!2s!4v1710232378413!5m2!1sen!2s"
        height="600"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer/>
    </div>
  );
}
