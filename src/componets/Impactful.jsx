import React from 'react'
import Container from '../container/Container'
import case01 from "../assets/case01.png"
import case02 from "../assets/case02.png"
import case03 from "../assets/case03.png"
import case04 from "../assets/case04.png"
import case05 from "../assets/case05.png"
import case06 from "../assets/case06.png"


const Impactful = () => {
    return (
        <>
            <section className='pt-[162px] pb-[44px]'>
                <Container>
                    <div className="">
                        <div className="">
                            <h2 className=' text-[96px] text-[#07152C] font-bold font-primary leading-[100%] text-center' >Our Impactful</h2>
                            <h3 className=' text-[96px] text-[#0055FF] font-bold font-primary leading-[100%] text-end'>Case study</h3>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-between gap-6">
                            <div className="w-1/2 pb-[100px]">
                            <img src={case01} alt="" />
                            <div className="mt-4">
                                <h2 className='text-[26px] text-[#07152C] font-medium font-primary leading-[100%] '>eAstate- The New Growth Ever </h2>
                                <div className=" flex gap-4 mt-3">
                                    <button className='py-1 px-3 border rounded-full text-[14px] text-[#07152c] font-normal font-primary'>UX/UI Design</button>
                                    <button className='py-1 px-3 border rounded-full text-[14px] text-[#07152c] font-normal font-primary'>Mobile Application</button>
                                </div>
                            </div>
                            </div>
                            <div className="w-1/2 pt-[100px]">
                            <img src={case02} alt="" />
                            <div className="mt-4">
                                <h2 className='text-[26px] text-[#07152C] font-medium font-primary leading-[100%] '>9Fluid-money transfer system  </h2>
                                <div className=" flex gap-4 mt-3">
                                    <button className='py-1 px-3 border rounded-full text-[14px] text-[#07152c] font-normal font-primary'>UX/UI Design</button>
                                    <button className='py-1 px-3 border rounded-full text-[14px] text-[#07152c] font-normal font-primary'>Mobile Application</button>
                                </div>
                            </div>
                            </div>
                           
                        </div>
                        <div className="flex justify-between gap-6 mt-6 ">
                            <div className="w-1/2 pb-[100px]">
                            <img src={case03} alt="" />
                            <div className="mt-4">
                                <h2 className='text-[26px] text-[#07152C] font-medium font-primary leading-[100%] '>Figma new shortcut ever exploration </h2>
                                <div className=" flex gap-4 mt-3">
                                    <button className='py-1 px-3 border rounded-full text-[14px] text-[#07152c] font-normal font-primary'>UX/UI Design</button>
                                    <button className='py-1 px-3 border rounded-full text-[14px] text-[#07152c] font-normal font-primary'>Mobile Application</button>
                                </div>
                            </div>
                            </div>
                            <div className="w-1/2 pt-[100px]">
                            <img src={case04} alt="" />
                            <div className="mt-4">
                                <h2 className='text-[26px] text-[#07152C] font-medium font-primary leading-[100%] '>Product Landing Page </h2>
                                <div className=" flex gap-4 mt-3">
                                    <button className='py-1 px-3 border rounded-full text-[14px] text-[#07152c] font-normal font-primary'>UX/UI Design</button>
                                    <button className='py-1 px-3 border rounded-full text-[14px] text-[#07152c] font-normal font-primary'>Mobile Application</button>
                                </div>
                            </div>
                            </div>
                           
                        </div>
                        <div className="flex justify-between gap-6 mt-6">
                            <div className="w-1/2 pb-[100px]">
                            <img src={case05} alt="" />
                            <div className="mt-4">
                                <h2 className='text-[26px] text-[#07152C] font-medium font-primary leading-[100%] '>Product Landing Page </h2>
                                <div className=" flex gap-4 mt-3">
                                    <button className='py-1 px-3 border rounded-full text-[14px] text-[#07152c] font-normal font-primary'>UX/UI Design</button>
                                    <button className='py-1 px-3 border rounded-full text-[14px] text-[#07152c] font-normal font-primary'>Mobile Application</button>
                                </div>
                            </div>
                            </div>
                            <div className="w-1/2 pt-[100px]">
                            <img src={case06} alt="" />
                            <div className="mt-4">
                                <h2 className='text-[26px] text-[#07152C] font-medium font-primary leading-[100%] '>eAstate- The New Growth Ever  </h2>
                                <div className=" flex gap-4 mt-3">
                                    <button className='py-1 px-3 border rounded-full text-[14px] text-[#07152c] font-normal font-primary'>UX/UI Design</button>
                                    <button className='py-1 px-3 border rounded-full text-[14px] text-[#07152c] font-normal font-primary'>Mobile Application</button>
                                </div>
                            </div>
                            </div>
                           
                        </div>
                        <div className="text-center mt-[54px]">
                            <button className='py-[18px] px-[60px]  rounded-full text-[20px] text-[#F8FCFF] font-medium font-primary bg-[#0055FF] cursor-pointer'>Explore Our All Work</button>
                        </div>
                       
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Impactful