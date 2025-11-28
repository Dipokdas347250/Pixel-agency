import React from 'react'
import Marquee from 'react-fast-marquee'
import logo1 from '../assets/logo01.png'
import logo2 from '../assets/logo02.png'
import logo3 from '../assets/logo03.png'
import logo4 from '../assets/logo04.png'    
import logo5 from '../assets/logo05.png'
import logo6 from '../assets/logo06.png'
import logo7 from '../assets/logo07.png'
import logo8 from '../assets/logo08.png'

const Marque = () => {
  return (
   <>
    <section className='py-[108PX]'>
        <Marquee speed={50} pauseOnHover={true} gradient={false}>
            <div className="flex gap-16 items-center">
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
                <img src={logo7} alt="" />
                <img src={logo8} alt="" />
            </div>
        </Marquee>
    </section>
  
   </>
  )
}

export default Marque