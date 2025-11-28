import React from 'react'
import Container from '../../container/Container'
import hero from "../../assets/hero.png"

const Hero = () => {
  return (
    <>
    <section className='pt-[240px] pb-[306px] bg-[#E6EEFF]'>
      <Container>
       <div className=" relative">
         <div className=" max-w-[832px]">
          <h2 className='text-[96px] text-[#07152C] font-bold font-primary leading-[100%]'>We Don't  --- <span className='text-[#0055FF]'>Just Design Websites</span></h2>
          <p className=' max-w-[650px] text-[20px] text-[#07152C] font-normal font-primary leading-[150%] mt-[42px]'>We're more than just a team, we're a family of passionate individuals united by a love for design and a commitment to excellence.</p>
          
        </div>
          <img  src={hero} alt="hero" className=' absolute right-[-370px] top-[-162px]' />
        
       </div>
      </Container>
    </section>
    </>
  )
}

export default Hero