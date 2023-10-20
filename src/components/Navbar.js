import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
      </ul>
           <div class={`form-check form-switch me-2 ${props.mode==='light'?'dark':'light'}`}>
            <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          
          </div>
      <form className="d-flex">
        <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search'/>
        <button className='btn btn-primary' type='submit'>Search</button>
      </form>
      </div>
  </div>
</nav>
</>
  )
}
Navbar.propTypes = {title: PropTypes.string,aboutText:PropTypes.string}

export default Navbar