import React from 'react'
import Container from '../../container/Container'
import our from "../../assets/our.png"

const Our = () => {
  return (
    <>
    <section className='py-[108px]'> 
        <Container>
            <div className="">
                <div className="">
                    <h2 className='text-[46px] text-[#07152C] font-medium font-primary leading-[130%] text-center'>Our journey began with a spark of passion, forever igniting our design spirit. Today, relentless dedication, a beating heart for design, and an unwavering drive to innovate make us who we are. </h2>
                </div>
                <div className="">
                    <img className='w-full mt-[72px]' src={our} alt="" />
                    
                </div>
            </div>

        </Container>
    </section>
    </>
  )
}

export default Our