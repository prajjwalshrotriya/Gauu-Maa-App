import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <>
      <div className="home">
        <div id='move-line'>
          <marquee >We sell the best dairy products in this region. Please be aware of fraudulent individuals who may use our name to sell you spoiled products.</marquee>
        </div>
        <div id="video">
          <video loop muted autoPlay="autoplay">
            <source src="./img/homevideo.mp4" type="video/mp4" />
          </video>
          <div id="h-text">
            <h1>Gauu Maa</h1>
            <h3>Promise of the purity</h3>
            <p>The quality of milk is of paramount importance to us because we don't sell just milk, we provide health and happiness to you and your family.</p>
          </div>
        </div>
        <div className="slideer">
        </div>
      </div>
    </>
  )
}

export default Home
