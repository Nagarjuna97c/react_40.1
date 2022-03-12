import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const Header = () => (
  <div className="header">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          className="hamburger-button"
          testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="icon" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <ul className="redirection-links">
            <li>
              <Link to="/" className="link">
                <AiFillHome className="icon" />
                <p className="redirect-para">Home</p>
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                <BsInfoCircleFill className="icon" />
                <p className="redirect-para">About</p>
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="close-button"
            onClick={() => close()}
            testid="closeButton"
          >
            <IoMdClose className="icon close-icon" />
          </button>
        </>
      )}
    </Popup>
  </div>
)
export default Header
