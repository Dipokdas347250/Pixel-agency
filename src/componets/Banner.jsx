import React from 'react'
import Container from '../container/Container'
import bannerImg from '../assets/banner.png'

const Banner = () => {
  return (
    <>
    <section className='banner pt-[225px] pb-[120px] bg-[#E6EEFF]'>
      <Container>
        <div className=" relative">
          <h1 className=' text-[190px] text-[#0055FF] font-medium font-secondary uppercase  leading-[120%] '>Design beyond </h1>
          <h2 className=' text-[190px] text-[#07152C] font-medium font-secondary uppercase leading-[120%] relative z-50 '>the screen</h2>
          <img className=' absolute top-[50px] right-[-20px]  w-[565px] h-[582px]' src={bannerImg} alt="" />
          <p className=' text-[20px]  text-[#2F3339] font-normal font-primary max-w-[580px] mt-[60px]' >PixelPeak is a global UX Design and Web Design Agency. Helping Brands redefine experiences and empower business growth.</p>

        </div>
      </Container>
    </section>            
    </>
  )
}

export default Banner