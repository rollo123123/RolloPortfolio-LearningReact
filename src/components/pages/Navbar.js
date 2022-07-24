import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaCat } from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    }
    else {
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton)

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to='/' className="navbar-logo">
          <FaCat className="navbar-icon"/>
            ROLLO
          </Link>
          <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes/> : <FaBars/>}
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className="nav-item">
              <Link to='/' className="nav-links">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to='/projects' className="nav-links">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link to='/socials' className="nav-links">
                Socials
              </Link>
            </li>

            <li className="nav-btn">
              {button ? (
                <Link to='/mini-game' className="btn-link">
                  <Button buttonStyle = 'btn--outline'> Play Mini Game </Button>
                </Link>
              ) : (
                <Link to='/mini-game' className="btn-link">
                <Button buttonStyle = 'btn--m=outline' buttonSize = 'btn--mobile'> Play Mini Game </Button>
                </Link>
              )}
            </li>


          </ul>

        </div>
      </div>
    </>
  )
}

export default Navbar