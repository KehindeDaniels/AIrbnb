import React from 'react'
import logo from '../assets/airbnb-logo.svg'

const Header = () => {
  return (
    <>
        <header>
            <div className="img">
                <img src={logo} alt="airbnb-logo" />
            </div>
        </header>
    </>
  )
}

export default Header