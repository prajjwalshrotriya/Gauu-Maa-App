import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section id='banner'>
        <h2>#ContactUs</h2>
        <p>Feel Free To Contact Us</p>
      </section>
      <section id='Contact'>
        <div className="contact-details">
            <span>GET IN TOUCH</span>
            <h2>Visit our farm or contact us today</h2>
            <h3>Our Farm</h3>
            <div>
                <li>
                <i class="fa-solid fa-map-location"></i>
                    <p>shrotriya krishi farm, Kalsans, Banera-Tehasil, bhilwara (311401)</p>
                </li>
                <li>
                <i class="fa-regular fa-envelope"></i>
                    <p>Gauu-maadairy@exampel.com</p>
                </li>
                <li>
                <i class="fa-solid fa-phone"></i>
                    <p>+91-1234567890,+91-0987654321</p>
                </li>
                <li>
                <i class="fa-regular fa-clock"></i>
                    <p>Monday To Sunday 9 A.M to 7 P.M</p>
                </li>
                <li className='conicon'>
                <div id="contacti">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-instagram insta"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp wa"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin in"></i></a>
                </div>
                </li>
            </div>
        </div>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.7784146437866!2d74.72778407426719!3d25.41222682295974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c50b3a09582f%3A0xa80ff5b33fa8f820!2sShotriy%20karshi%20farm%20kalsas!5e0!3m2!1sen!2sin!4v1691477275660!5m2!1sen!2sin"  style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </>
  )
}

export default Contact
