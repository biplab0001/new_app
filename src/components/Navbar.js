import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
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
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">{props.about}</a>
              </li>

            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <label className={`nav-text text-${(props.mode === 'dark') ? 'light' : 'dark'}`}>Select the mode : </label>

              <button type="button" onClick={() => props.clickMode('grey')} className="btn btn-secondary btn-sm" id='grey'>Grey</button>
              <button type="button" onClick={() => props.clickMode('read')} className="btn btn-warning btn-sm" id='read'>Read</button>
              <button type="button" onClick={() => props.clickMode('green')} className="btn btn-success btn-sm" id='green'>Green</button>
              <button type="button" onClick={() => props.clickMode('dark')} className="btn btn-dark btn-sm" id='dark'>Dark</button>
              <button type="button" onClick={() => props.clickMode('light')} className="btn btn-light btn-sm" id='light'>Light</button>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  about: 'About text here'
}
