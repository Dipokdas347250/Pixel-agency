import React from 'react'
import Container from '../container/Container'
import CountUp from 'react-countup';
import { GoArrowRight } from "react-icons/go";
import Lets from './Lets';


const Letsget = () => {
  return (
   <>
   <section className='py-[108px]'>
    <Container>
        <div className="flex justify-between gap-4">
            <div className="w-1/4 px-6 pt-6 pb-[36px] bg-[#F8FCFF]">
            <h2 className='  text-[16px] text-[#07152c] font-medium font-unbounded underline leading-[100%]'>01</h2>
            <h3 className='text-[24px] text-[#07152c] font-normal font-primary text-center leading-[100%] mt-[74px]'>Years of Experience </h3>
            <div className="flex items-center text-4xl font-medium justify-center font-unbounded mt-[71px] ">
                <h2>0</h2>
                 <CountUp className='text-4xl' end={7}  duration={4.75} />
                        <h1>+</h1>
            </div>
            </div>
            <div className="w-1/4 px-6 pt-6 pb-[36px] bg-[#F8FCFF]">
            <h2 className='  text-[16px] text-[#07152c] font-medium font-unbounded underline leading-[100%]'>02</h2>
            <h3 className='text-[24px] text-[#07152c] font-normal font-primary text-center leading-[100%] mt-[74px]'>Team Members </h3>
            <div className="flex items-center text-4xl font-medium justify-center font-unbounded mt-[71px]">
                
                 <CountUp className='text-4xl' end={34}  duration={4.75} />
                        
            </div>
            </div>
            <div className="w-1/4 px-6 pt-6 pb-[36px] bg-[#F8FCFF]">
            <h2 className='  text-[16px] text-[#07152c] font-medium font-unbounded underline leading-[100%]'>03</h2>
            <h3 className='text-[24px] text-[#07152c] font-normal font-primary text-center leading-[100%] mt-[74px]'>Happy Clients </h3>
            <div className="flex items-center text-4xl font-medium justify-center font-unbounded mt-[71px]">
                
                 <CountUp className='text-4xl' end={50}  duration={4.75} />
                        <h1>+</h1>
            </div>
            </div>
            <div className="w-1/4 px-6 pt-6 pb-[36px] bg-[#F8FCFF]">
            <h2 className='  text-[16px] text-[#07152c] font-medium font-unbounded underline leading-[100%]'>04</h2>
            <h3 className='text-[24px] text-[#07152c] font-normal font-primary text-center leading-[100%] mt-[74px]'>Total Awards </h3>
            <div className="flex items-center text-4xl font-medium justify-center font-unbounded mt-[71px]">
                
                 <CountUp className='text-4xl' end={17}  duration={4.75} />
                        
            </div>
            </div>
        </div>

        <Lets/>
        
    </Container>
   </section>
   </>
  )
}

export default Letsget