
import React from 'react'
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose, AiFillHome } from "react-icons/ai"
import { IoIosNotifications, IoIosAddCircleOutline } from "react-icons/io";
// import { IconContext } from 'react-icons'

export default function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false)
  function menuToggle() {
    setShowMenu(!showMenu)
  }
    return (
    <>
    {/* <IconContext.Provider value={{size: "40px"}}> */}
      <nav>
        <div className='d-flex justify-content-between'>
          <FaBars size='25px'onClick={menuToggle} style={{cursor: 'pointer'}} />
          <div className='dropdown'>
            <button className='dropdown-toggle btn' data-bs-toggle='dropdown'>Sameer</button>
            <ul className='dropdown-menu'>
              <p style={{width: '100%'}} className='px-3'>Md Sameer <br />sameerthemc@gmail.com</p>
              <li className='dropdown-item text-primary'>Admin</li>
              <li className='dropdown-item text-primary'>Settings</li>
              <li className='dropdown-item text-primary'>Preferences</li>
              <li className='dropdown-item text-primary'>Recent Activity</li>
              <li className='dropdown-item text-primary'>Sign Out</li>
            </ul>
          </div>
        </div>
        <input type='search' placeholder='Search your apps' className='mt-2 p-1 form-control' />
        <div className="navbar" style={{display: "flex", justifyContent: "space-between"}}>
          <div  className={showMenu ? "menu active" : "menu"}>
            <ul>
              <li className='text-end close-icon-li'>
              <AiOutlineClose className='close-icon' onClick={menuToggle} style={{cursor: 'pointer'}} color='white' size='25px' />
              </li>
              <li>
                <Link className='d-flex align-items-center gap-2'> <AiFillHome /> My Apps</Link>
              </li>
              <li>
                <Link className='ms-4'>Work</Link>
              </li>
              <li>
                <Link className='ms-4 d-flex align-items-center gap-1'>Add section <IoIosAddCircleOutline /></Link>
              </li>
              <li>
                <Link className='d-flex align-items-center gap-2'> <IoIosNotifications si /> Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    {/* </IconContext.Provider> */}
    <Link className='logo' to='/'>
      <img src="okta1.png" width="150px" height='55px' className='cursor-pointer' style={{padding: '10px'}} />
    </Link>
    </>
    )
  }
  