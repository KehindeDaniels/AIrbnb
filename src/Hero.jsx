import React from 'react'
import hero from './assets/hero-image.jpg'

const Hero = () => {
  return (
    <>
        <section className="hero mt-8 px-6">
            <div className="hero-img px-8">
                <img src={hero} alt="hero-image" />
            </div>

            <div className="hero-content ">
                <h1 className='text-4xl mt-4 mb-2 font-bold'>Online Experience</h1>
                <p className='text-base max-w-72'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    </>
  )
}

export default Hero