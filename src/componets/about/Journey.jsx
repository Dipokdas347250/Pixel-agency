import React from 'react'
import Container from '../../container/Container'
import JourneyImage from '../../assets/section.png'
import { IoArrowForwardOutline } from "react-icons/io5";
import Lets from '../Lets';


const Journey = () => {
    return (
        <>
            <section className='py-[100px]'>
                <Container>
                    <div className="flex gap-10 ">
                        <div className="w-[45%]">
                            <img className='w-[100%]' src={JourneyImage} alt="Journey" />
                        </div>
                        <div className="w-[55%]">
                            <h2 className=' text-[96px] text-[#07152C] font-bold font-primary leading-[100%]  ' >Start Your </h2>
                            <h3 className=' text-[96px] text-[#0055FF] font-bold font-primary leading-[100%] '>Journey</h3>
                            <p className='text-[22px] text-[#2F3339] font-normal font-primary leading-[130%] mt-[34px]'>Selecting PixelPeak isn't just a career choice; it's an invitation to nurture your talents and fuel your passion. As your ally in growth, we foster a culture of innovation and personal advancement, crafting exceptional user experiences within a dynamic and collaborative environment.</p>
                            <button className='flex items-center gap-2 py-[18px] px-[60px] bg-[#0055FF] text-white rounded-full text-[20px] font-primary mt-[34px]'>Start Your Career <IoArrowForwardOutline /></button>
                        </div>
                    </div>

                    <Lets/>

                </Container>
            </section>
        </>
    )
}

export default Journey