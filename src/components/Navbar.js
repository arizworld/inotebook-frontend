import React, { useEffect,useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import NoteContext from '../context/NoteContext';

function Navbar() {
  let location = useLocation();
  const {setIslogin} = useContext(NoteContext);
  useEffect(() => {
  }, [location])
  let navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    setIslogin(false);
    navigate('/login')
  }
  const handleDropdown = () => {
    const links = document.querySelector('.links')
    const linksB = document.querySelector('.links.b')
    links.classList.toggle('show-links')
    linksB.classList.toggle('show-links')
  }
  return (
    <>
      <nav>
        <div className="nav-center">
          {/* <!-- nav header --> */}
          <div className="nav-header">
            <div className="logo">
              <h2>i<span className="logospan">Note</span>book</h2>
            </div>
            <button className="nav-toggle" onClick={handleDropdown}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- links --> */}
          <ul className="links">
            <li>
              <Link to="/" className={location.pathname === '/' ? "active-link" : ""}>home</Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? "active-link" : ""}>about</Link>
            </li>
            <li>
              <Link to="/notes" className={location.pathname === '/notes' ? "active-link" : ""}>notes</Link>
            </li>
            </ul>
            {!localStorage.getItem('token') &&
              <ul className='links b'>
                <li>
                  <Link to="/login" className={location.pathname === '/login' ? "active-link" : ""}>
                    <button className='btn btn-primary'>Login</button>
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className={location.pathname === '/signup' ? "active-link" : ""}>
                    <button className='btn btn-primary'>Sign up</button>
                  </Link>
                </li>
              </ul>
            }
            {localStorage.getItem('token') &&
            <ul className="links b">
              <li>
                <Link to='/login'>
                  <button className="btn btn-primary"onClick={handleLogout}>Log out</button>
                </Link>
              </li>
            </ul>
            }
        </div>
      </nav>
    </>
  )
}

export default Navbar
