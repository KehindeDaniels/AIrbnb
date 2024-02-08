import React from 'react'
import logo from '../assets/airbnb-logo.svg'

const Header = () => {
  return (
    <>
        <header className='shadow-md py-6 px-6 mt-8'>
            <div className="img">
                <img src={logo} alt="airbnb-logo" />
            </div>
        </header>
    </>
  )
}

export default Header