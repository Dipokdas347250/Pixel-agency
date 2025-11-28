import React from 'react'
import Container from '../container/Container'
import { Link } from 'react-router'
import logo from '../assets/logo.png'


const Footer = () => {
  return (
    <>
    <footer className='py-[116px] bg-[#E6EEFF]'>
    <Container>
        <div className="">
            <div className="flex justify-between">
                <div className="">
                    <Link to="/"><img  src={logo} alt="" /></Link>
                    <p className='text-[16px] text-[#07152C] font-normal font-primary leading-[100%] mt-2'>© 2023 Your Company. All rights reserved.</p>
                </div>
                <div className="flex gap-20">
                  <div className="">
                    <h3 className='text-[20px] text-[#07152C] font-bold font-primary leading-[100%]'>Company</h3>
                    <ul className=' flex flex-col gap-3 mt-4 text-[18px] text-[#07152C] font-normal font-primary leading-[100%]'>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Service</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                  </div>
                  <div className="">
                    <h3 className='text-[20px] text-[#07152C] font-bold font-primary leading-[100%]'>Explore</h3>
                    <ul className=' flex flex-col gap-3 mt-4 text-[18px] text-[#07152C] font-normal font-primary leading-[100%]'>
                        <li>Envato</li>
                        <li>Webflow </li>
                        <li>Webflow Expert</li>
                    </ul>
                  </div>
                  <div className="">
                    <h3 className='text-[20px] text-[#07152C] font-bold font-primary leading-[100%]'>Social</h3>
                    <ul className=' flex flex-col gap-3 mt-4 text-[18px] text-[#07152C] font-normal font-primary leading-[100%]'>
                        <li>Facebook</li>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                    </ul>
                  </div>
                 
                </div>
            </div>
            <div className=""></div>
        </div>
    </Container>
    </footer>
    </>
  )
}

export default Footer