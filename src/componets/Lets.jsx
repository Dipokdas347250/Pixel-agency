import React from 'react'
import Container from '../container/Container'
import { GoArrowRight } from "react-icons/go";

const Lets = () => {
  return (
    <>
    <section className='pt-[108px]'>
        <Container>
            <div className="flex justify-center ">
            <button className='p-[32px] flex items-center cursor-pointer border border-[#0055FF]  text-[30px] text-[#07152C] font-primary font-bold rounded-full relative after:absolute after:top-0 after:left-0 after:w-[33%] after:h-[100%] after:bg-[#0055FF] after:rounded-full after:-z-10 after: after:duration-300 after:ease-in-out hover:after:w-full '>
                <h3 className=' '><span className='text-[#fff]'>let's </span>get to work.</h3>
            <GoArrowRight/></button>

        </div>
        </Container>
    </section>
    </>
  )
}

export default Lets