import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti iure rerum corporis aspernatur dolorum laboriosam quos quis architecto vel laborum sint, nihil earum recusandae odit atque itaque eos! Tempore, ipsam.</span>
        </div>
        <div className="item">
        <h1>Contatc</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nemo minus? Ad asperiores facere exercitationem eaque quo eos sequi incidunt dolores dignissimos eveniet. Obcaecati ullam illo nam omnis, cumque exercitationem.</span>
      </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className='logo'>CLOTHES STORE</span>
          <span className='copyright'>© Copyright 2023. All rights reserved.</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Footer