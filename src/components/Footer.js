import React from 'react'
import { Link } from 'react-router-dom'
import useWindowSize from '../customHooks/windowSize'
const Footer = () => {
  return (
    <div className='footer'>        
      {/* <!-- social media --> */}
      <ul className="social-icons">
          <li>
            <a href="https://www.twitter.com" target='_b' rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target='_b' rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target='_b' rel="noreferrer">
              <i className="fab fa-behance"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target='_b' rel="noreferrer">
              <i className="fab fa-aedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target='_b' rel="noreferrer">
              <i className="fab fa-sketch"></i>
            </a>
          </li>
        </ul>
    </div>
  )
}

export default Footer
