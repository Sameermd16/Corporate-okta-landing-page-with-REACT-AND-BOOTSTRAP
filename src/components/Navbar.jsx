
import React from 'react'
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
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
        <FaBars size='25px'onClick={menuToggle} style={{cursor: 'pointer'}} />
        <input type='search' placeholder='Search your apps' className='ms-4 p-1' style={{width: '250px'}} />
        <div className="navbar" style={{display: "flex", justifyContent: "space-between"}}>
          <div  className={showMenu ? "menu active" : "menu"}>
            <ul>
              <li className='text-end close-icon-li'>
              <AiOutlineClose className='close-icon' onClick={menuToggle} style={{cursor: 'pointer'}} color='white' size='25px' />
              </li>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Workspaces</Link>
              </li>
              <li>
                <Link>Settings</Link>
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
  