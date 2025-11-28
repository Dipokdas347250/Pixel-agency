import React from 'react'
import Container from '../container/Container'
import expertiseImg from '../assets/Rec.png'
import act from '../assets/act.png'
import ui from '../assets/ui.png'
import dev from '../assets/Dev.png'
import Mar from '../assets/Mar.png'
import Bra from '../assets/bra.png'


const Expertise = () => {
    return (
        <>
            <section className='pt-[87px] pb-[70px] '>
                <Container>
                    <div className=" flex justify-between items-center gap-[120px]">
                        <div className="">
                            <img className='w-[456px] h-[333px]' src={expertiseImg} alt="" />
                        </div>
                        <div className="w-[552px]">
                            <h2 className=' text-[48px] text-[#07152C] font-normal font-primary'>  Our expertise lies
                                in transforming concepts
                                into engaging interactive
                                masterworks.</h2>
                        </div>
                    </div>
                    <div className="mt-[120px] pt-[108px] pb-[70px]">
                        <div className="">
                            <h2 className=' text-[96px] text-[#07152C] font-bold font-primary leading-[100%] ml-[100px]' >Our Expertise</h2>
                            <h3 className=' text-[96px] text-[#0055FF] font-bold font-primary leading-[100%]'>Action</h3>
                        </div>

                        <div className=" flex justify-between  gap-10 ">
                            <div className="mt-[63px]">
                                <img className='w-[375px]  ' src={act} alt="" />
                            </div> 
                            <div className="w-[743px]">
                                <div className="flex items-center py-8 border-b border-[#2F3339 ] gap-6  ">
                                    <img className='w-[90px] h-[90px]' src={ui} alt="" />
                                    <div className="">
                                        <h2 className='text-[36px] text-[#07152C] font-medium font-primary leading-[100%] '>UI/UX Design</h2>
                                        <p className='text-[16px] text-[#07152C] font-normal font-primary leading-[150%] mt-[12px] '>Our UI/UX experts meticulously plan and implement interfaces that not only look aesthetically pleasing but also enhance usability.</p>
                                    </div>
                                </div>
                                <div className="flex items-center py-8 border-b border-[#2F3339 ] gap-6  ">
                                    <img className='w-[90px] h-[90px]' src={dev} alt="" />
                                    <div className="">
                                        <h2 className='text-[36px] text-[#07152C] font-medium font-primary leading-[100%] '>Development</h2>
                                        <p className='text-[16px] text-[#07152C] font-normal font-primary leading-[150%] mt-[12px] '>Our development team creates innovative and functional All platforms, tailored to meet your specific business objectives.</p>
                                    </div>
                                </div>
                                <div className="flex items-center py-8 border-b border-[#2F3339 ] gap-6  ">
                                    <img className='w-[90px] h-[90px]' src={Mar} alt="" />
                                    <div className="">
                                        <h2 className='text-[36px] text-[#07152C] font-medium font-primary leading-[100%] '>Digital Marketing</h2>
                                        <p className='text-[16px] text-[#07152C] font-normal font-primary leading-[150%] mt-[12px] '>We leverage pay-per-click (PPC) strategies to ensure your ads are seen by the right audience, driving qualified traffic to your website.</p>
                                    </div>
                                </div>
                                <div className="flex items-center py-8 gap-6   ">
                                    <img className='w-[90px] h-[90px]' src={Bra} alt="" />
                                    <div className="">
                                        <h2 className='text-[36px] text-[#07152C] font-medium font-primary leading-[100%] '>Brand Identity</h2>
                                        <p className='text-[16px] text-[#07152C] font-normal font-primary leading-[150%] mt-[12px] '>We create a cohesive and memorable brand image that resonates with your audience.</p>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Expertise