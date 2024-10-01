import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container'>
                <img src="Reecocefe-Logo.webp" alt="logo" width={200} />

                <div className=' flexCenter h-menu'>
                    {/* <a href="">HOME</a>
                    <a href="">OUR SERVICES</a>
                    <a href="">ABOUT US</a>
                    <a href="">PORTFOLIO</a>
                    <button className='button'>
                        <a href="">CONTACT</a>
                    </button> */}

                </div>


            </div>
        </section>
    )
}

export default Header