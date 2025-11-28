import React from 'react'
import Container from '../container/Container'
import { Link } from 'react-router'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <>
    <header className='py-[26px] shadow-md bg-[#E6EEFF] fixed w-full top-0 left-0 z-50 '>
        <Container>
            <div className="flex justify-between align-center">
                <div className="max-w-[120px] h-[26px]">
                    <Link to="/"><img  src={logo} alt="" /></Link>
                </div>
                <nav className="nav">
                    <ul className=" flex gap-6 text-[#2F3339] font-medium font-primary">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/about">Service</Link></li>
                        <li><Link to="/about">Work</Link></li>
                        <li><Link to="/about">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </Container>
    </header>
    </>
  )
}

export default Header