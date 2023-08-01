
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
  
  
  {/* <nav className="navbar bg-dark navbar-expand-lg shadow">
      <a className="navbar-brand text-white">
          <img src="okta1.png" style={{width: "100px", height: "40px"}} className="pb-2" />
      </a>
      <button className="navbar-toggler" data-bs-target="#id" data-bs-toggle="collapse">
        <span className="navbar-toggler-icon navbar-dark"></span>
      </button>
      <div className="input-group" mt-2>
        <span className="input-group-text" id="search"><bsIcons.BsSearch /></span>
        <input type="search" placeholder="Search your apps" className="form-control col-12" aria-describedby="search" />
      </div>
      <div className="collapse navbar-collapse" id="id">
        <ul className="navbar-nav ms-auto text-center">
          <li className="nav-item">
            <a className="nav-link text-white">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">games</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white">software</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link text-white dropdown-toggle" role="button" href="#" data-bs-toggle="dropdown">software</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item">javascript</a></li>
              <li><a className="dropdown-item">c++</a></li>
              <li><a className="dropdown-item">python</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>    */}
=======
// import { BsSearch } from "react-icons/bs"
import * as bsIcons from "react-icons/bs"

export default function Navbar() {
    console.log("hello")
    return (
    <>
    <nav className="navbar bg-dark navbar-expand-lg shadow">
        <a className="navbar-brand text-white">
            <img src="okta1.png" style={{width: "100px", height: "40px"}} className="pb-2" />
        </a>
        <button className="navbar-toggler" data-bs-target="#id" data-bs-toggle="collapse">
          <span className="navbar-toggler-icon navbar-dark"></span>
        </button>
        <div className="input-group" mt-2>
          <span className="input-group-text" id="search"><bsIcons.BsSearch /></span>
          <input type="search" placeholder="Search your apps" className="form-control col-12" aria-describedby="search" />
        </div>
        <div className="collapse navbar-collapse" id="id">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <a className="nav-link text-white">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">games</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white">software</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link text-white dropdown-toggle" role="button" href="#" data-bs-toggle="dropdown">software</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">javascript</a></li>
                <li><a className="dropdown-item">c++</a></li>
                <li><a className="dropdown-item">python</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>   
    </>
    )
}


