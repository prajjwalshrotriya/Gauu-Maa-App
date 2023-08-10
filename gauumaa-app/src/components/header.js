import React, { useState } from 'react'
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenue,setOpenMenue]=useState(false);
  return (
    <>
      <header>
        <div className="up-head">
            <div id="logo">
                <a href="#" id='G'>Gauu</a>
                <a href="#" id='M'>Maa</a>
            </div>
            <div id="hdetails">
                <img src="./img/cowpng.png" alt="cow-png" />
                <div id="headi">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-instagram insta"></i></a>
                <a href="#"><i class="fa-brands fa-whatsapp wa"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin in"></i></a>
                </div>
                <span>जिनकी सेवा कर के नर भव से तर जाता। <br />
सब देवों का अंश समेटे हैं गो माता॥</span>
<div id='mobile'>
          <a href="#" onClick={()=>setOpenMenue(true)}><i  className='fas fa-bars mobile-bar' ></i></a>
        </div>
            </div>
        </div>
        <div className="down-head">
          <nav className={openMenue ? 'navbar active' : 'navbar'}>
          <a href="#" onClick={()=>setOpenMenue(false)}><i  className='fas fa-times active mobile-x' ></i></a>
          <Link to="/">Home</Link>
          <Link to="/cow">Our Cows</Link>
          <Link to="/products">Products</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/visit">Book a Visit</Link>
          <Link to="/contact">Contact us</Link>
          </nav>
        </div>
        
      </header>
    </>
  )
}

export default Header
