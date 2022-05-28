import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>        
      {/* <!-- social media --> */}
      <ul className="social-icons">
          <li>
            <Link to="https://www.twitter.com">
              <i className="fab fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link to="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to="https://www.twitter.com">
              <i className="fab fa-behance"></i>
            </Link>
          </li>
          <li>
            <Link to="https://www.twitter.com">
              <i className="fab fa-linkedin"></i>
            </Link>
          </li>
          <li>
            <Link to="https://www.twitter.com">
              <i className="fab fa-sketch"></i>
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default Footer
