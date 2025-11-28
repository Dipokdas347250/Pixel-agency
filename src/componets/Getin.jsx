import React from 'react'
import Container from '../container/Container'
import get from '../assets/get.png'

const Getin = () => {
    return (
        <>
            <section className='pt-[147px] pb-[123px]'>
                <Container >
                    <div className="">
                        <h2 className=' text-[96px] text-[#07152C] font-bold font-primary leading-[100%]'>
                            Get in  <span className=' text-[96px] text-[#0055FF] font-bold font-primary leading-[100%] '>Touch</span>
                        </h2>
                        <p className=' text-[20px] text-[#07152C] font-normal font-primary leading-[150%] mt-4'>Let’s create interesting designs together!</p>

                    </div>
                    <div className="flex justify-between gap-10 ">
                        <div className="w-[194px]  relative">
                            <img className=' absolute bottom-0 left-[-100px] w-[250px] ' src={get} alt="" />
                        </div>
                        <div className="w-[936px]  ">
                        <div className="flex gap-10">
                            <input className='w-[50%] outline-none border-b-2 py-3 text-[16px] text-[#07152C] font-normal font-primary leading-[150%]' type="name" placeholder='Your Name' name='name'/>
                            <input className='w-[50%] outline-none border-b-2 py-3 text-[16px] text-[#07152C] font-normal font-primary leading-[150%]' type="text" placeholder='Company Name' name='company'/>
                        </div>
                        <div className="flex gap-10 mt-[20px]">
                            <input className='w-[50%] outline-none border-b-2 py-3 text-[16px] text-[#07152C] font-normal font-primary leading-[150%]' type="text" placeholder='Your Email' name='email'/>
                            <input className='w-[50%] outline-none border-b-2 py-3 text-[16px] text-[#07152C] font-normal font-primary leading-[150%]' type="text" placeholder='Your Number' name='number'/>
                        </div>
                       <div className="flex gap-8">
                         <div className="w-[50%] ">
                            <h2 className=' text-[20px] text-[#07152C] font-normal font-primary leading-[150%] mt-[30px]'>Service Name*</h2>
                          <div className=" flex-wrap gap-4 mt-2 flex ">
                          <button className=' border py-3 px-3 rounded-full text-[16px] text-[#07152C] font-normal font-primary leading-[150%] duration-300 ease-in-out cursor-pointer hover:bg-[#0055FF] hover:text-white'>UI/UX Design</button>
                          <button className=' border py-3 px-3 rounded-full text-[16px] text-[#07152C] font-normal font-primary leading-[150%] duration-300 ease-in-out cursor-pointer hover:bg-[#0055FF] hover:text-white'>Development</button>
                          <button className=' border py-3 px-3 rounded-full text-[16px] text-[#07152C] font-normal font-primary leading-[150%] duration-300 ease-in-out cursor-pointer hover:bg-[#0055FF] hover:text-white'>Digital Marketing</button>
                          <button className=' border py-3 px-3 rounded-full text-[16px] text-[#07152C] font-normal font-primary leading-[150%] duration-300 ease-in-out cursor-pointer hover:bg-[#0055FF] hover:text-white'>Brand Identity</button>
                          <button className=' border py-3 px-3 rounded-full text-[16px] text-[#07152C] font-normal font-primary leading-[150%] duration-300 ease-in-out cursor-pointer hover:bg-[#0055FF] hover:text-white'>Website Design </button>
                          <button className=' border py-3 px-3 rounded-full text-[16px] text-[#07152C] font-normal font-primary leading-[150%] duration-300 ease-in-out cursor-pointer hover:bg-[#0055FF] hover:text-white'>Others</button>
                          </div>

                        </div>
                         <div className="w-[50%] ">
                            <h2 className=' text-[20px] text-[#07152C] font-normal font-primary leading-[150%] mt-[30px]'>Budget*</h2>
                          <div className=" flex-wrap gap-4 mt-2 flex ">
                          <button className=' border py-3 px-3 rounded-full text-[16px] text-[#07152C] font-normal font-primary leading-[150%] duration-300 ease-in-out cursor-pointer hover:bg-[#0055FF] hover:text-white'>$2k</button>
                          <button className=' border py-3 px-3 rounded-full text-[16px] text-[#07152C] font-normal font-primary leading-[150%] duration-300 ease-in-out cursor-pointer hover:bg-[#0055FF] hover:text-white'>$2k-$5k</button>
                          <button className=' border py-3 px-3 rounded-full text-[16px] text-[#07152C] font-normal font-primary leading-[150%] duration-300 ease-in-out cursor-pointer hover:bg-[#0055FF] hover:text-white'>$5k-$10k  </button>
                          <button className=' border py-3 px-3 rounded-full text-[16px] text-[#07152C] font-normal font-primary leading-[150%] duration-300 ease-in-out cursor-pointer hover:bg-[#0055FF] hover:text-white'>$10k-$50k</button>
                          <button className=' border py-3 px-3 rounded-full text-[16px] text-[#07152C] font-normal font-primary leading-[150%] duration-300 ease-in-out cursor-pointer hover:bg-[#0055FF] hover:text-white'>$50k-100k </button>
                          <button className=' border py-3 px-3 rounded-full text-[16px] text-[#07152C] font-normal font-primary leading-[150%] duration-300 ease-in-out cursor-pointer hover:bg-[#0055FF] hover:text-white'>$100K+</button>
                          </div>

                        </div>
                       </div>
                        <div className="mt-[50px]">
                            <textarea className='w-full outline-none border-b  text-[16px] text-[#07152C] font-normal font-primary leading-[150%]  resize-none' rows="0" placeholder='Statement of needs*' name='message'></textarea>
                        </div>
                        
                        <div className="mt-[40px]">
                            <button className=' bg-[#0055FF] text-white text-[16px] font-medium font-primary leading-[100%] py-3 px-8 rounded-full cursor-pointer'>Submit</button>
                        </div>
                    </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Getin