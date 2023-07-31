import { BsSearch } from "react-icons/bs"

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
          <span className="input-group-text" id="search"><BsSearch /></span>
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

