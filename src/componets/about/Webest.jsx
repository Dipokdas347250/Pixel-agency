import React from 'react'
import Container from '../../container/Container'
import TeamImage from '../../assets/b72.png'

const Webest = () => {
    return (
        <>
            <section className='py-[100px]'>
                <Container>
                    <div className="flex gap-10">
                        <div className="w-[40%]">
                            <h2 className=' text-[96px] text-[#07152C] font-bold font-primary leading-[100%] mt-10 ' >Why We</h2>
                            <h3 className=' text-[96px] text-[#0055FF] font-bold font-primary leading-[100%] text-end mb-[37px]'>Best?</h3>
                            <img src={TeamImage} alt="Team" />

                        </div>
                        <div className="w-[60%]">
                            <div className="py-[30px] border-b border-[#2F3339] mb-[30px]">
                                <h3 className='text-[36px] text-[#07152C] font-medium font-primary leading-[120%]'>Strategic Innovation</h3>
                                <p className='text-[16px] text-[#2F3339] font-normal font-primary leading-[150%]'>we are architects of innovation and champions of client success. Our commitment to excellence goes beyond the ordinary, and here's what makes us stand out in the digital landscape.</p>
                            </div>
                            <div className="py-[30px] border-b border-[#2F3339] mb-[30px]">
                                <h3 className='text-[36px] text-[#07152C] font-medium font-primary leading-[120%]'>Client-Centric Approach</h3>
                                <p className='text-[16px] text-[#2F3339] font-normal font-primary leading-[150%]'>We take the time to understand your unique goals, challenges, and aspirations. This client-centric focus allows us to tailor our services and strategies to align seamlessly with your vision and objectives.
                                </p>
                            </div>
                            <div className="py-[30px] border-b border-[#2F3339] mb-[30px]">
                                <h3 className='text-[36px] text-[#07152C] font-medium font-primary leading-[120%]'>Collaborative Partnership</h3>
                                <p className='text-[16px] text-[#2F3339] font-normal font-primary leading-[150%]'>Collaboration is at the heart of everything we do. We see ourselves as an extension of your team, working closely with you to achieve shared objectives. Open communication and transparency are the cornerstones of our client partnerships.

                                </p>
                            </div>
                            <div className="py-[30px] border-b border-[#2F3339] mb-[30px]">
                                <h3 className='text-[36px] text-[#07152C] font-medium font-primary leading-[120%]'>Measurable Results</h3>
                                <p className='text-[16px] text-[#2F3339] font-normal font-primary leading-[150%]'>We are not just about delivering projects; we are about delivering results. Our data-driven approach ensures that every strategy, design, and development decision is backed by analytics, providing you with measurable insights into the impact of our work.

                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

        </>
    )
}

export default Webest