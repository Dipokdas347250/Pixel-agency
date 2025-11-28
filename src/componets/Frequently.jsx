import React from 'react'
import Container from '../container/Container'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const Frequently = () => {
    return (
        <>
            <section className='pb-[147px]'>
                <Container>
                    {/* Heading */}
                    <div className="">
                        <h2 className=' text-[96px] text-[#07152C] font-bold font-primary leading-[100%] ml-[215px]'>
                            Frequently Asked
                        </h2>
                        <h3 className=' text-[96px] text-[#0055FF] font-bold font-primary leading-[100%] ml-[72px]'>
                            Questions
                        </h3>
                    </div>

                    <Tabs className='mt-[108px] flex gap-16'>
                        {/* Left Side - Tabs */}
                        <div>
                            <TabList className="flex flex-col gap-8">
                                <Tab
                                    selectedClassName="bg-[#0055FF] text-white"
                                    className='py-[30px] px-5 w-[552px] text-[20px] text-[#07152C] font-medium font-primary leading-[100%] border-2 border-[#0055FF] rounded-full cursor-pointer'
                                >
                                    How much does UI & UX design project cost?
                                </Tab>
                                <Tab
                                    selectedClassName="bg-[#0055FF] text-white"
                                    className='py-[30px] px-5 w-[552px] text-[20px] text-[#07152C] font-medium font-primary leading-[100%] border-2 border-[#0055FF] rounded-full cursor-pointer'
                                >
                                    What is included in your UI & UX design services?
                                </Tab>
                                <Tab
                                    selectedClassName="bg-[#0055FF] text-white"
                                    className='py-[30px] px-5 w-[552px] text-[20px] text-[#07152C] font-medium font-primary leading-[100%] border-2 border-[#0055FF] rounded-full cursor-pointer'
                                >
                                    What type of UI UX services do you offer for start-ups?
                                </Tab>
                                <Tab
                                    selectedClassName="bg-[#0055FF] text-white"
                                    className='py-[30px] px-5 w-[552px] text-[20px] text-[#07152C] font-medium font-primary leading-[100%] border-2 border-[#0055FF] rounded-full cursor-pointer'
                                >
                                    Do you provide ongoing support after completing the UI & UX design project?
                                </Tab>
                            </TabList>
                        </div>

                        {/* Right Side - Panels */}
                        <div>
                            <TabPanel>
                                <div className="p-6 border border-[#2F3339] rounded-lg">
                                    <h2 className='text-[20px] text-[#07152C] font-bold font-primary leading-[100%]'>
                                        How much does UI & UX design project cost?
                                    </h2>
                                    <p className='text-[20px] text-[#07152C] font-medium font-primary leading-[150%] mt-4'>
                                        We offer a wide range of UI UX services for startups to kickstart your success. We provide design, branding, and user research to establish a strong foundation. Our services also include app design, customer analysis, and design research to understand your users deeply. We ensure seamless implementation with developers, focus on interactivity and animation, and adapt designs to all device screen sizes.
                                    </p>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="p-6 border border-[#2F3339] rounded-lg">
                                    <h2 className='text-[20px] text-[#07152C] font-bold font-primary leading-[100%]'>
                                        What is included in your UI & UX design services?
                                    </h2>
                                    <p className='text-[20px] text-[#07152C] font-medium font-primary leading-[150%] mt-4'>
                                        We offer a wide range of UI UX services for startups to kickstart your success. We provide design, branding, and user research to establish a strong foundation. Our services also include app design, customer analysis, and design research to understand your users deeply. We ensure seamless implementation with developers, focus on interactivity and animation, and adapt designs to all device screen sizes.
                                    </p>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="p-6 border border-[#2F3339] rounded-lg">
                                    <h2 className='text-[20px] text-[#07152C] font-bold font-primary leading-[100%]'>
                                        What type of UI UX services do you offer for start-ups?
                                    </h2>
                                    <p className='text-[20px] text-[#07152C] font-medium font-primary leading-[150%] mt-4'>
                                        We offer a wide range of UI UX services for startups to kickstart your success. We provide design, branding, and user research to establish a strong foundation. Our services also include app design, customer analysis, and design research to understand your users deeply. We ensure seamless implementation with developers, focus on interactivity and animation, and adapt designs to all device screen sizes.
                                    </p>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="p-6 border border-[#2F3339] rounded-lg">
                                    <h2 className='text-[20px] text-[#07152C] font-bold font-primary leading-[100%]'>
                                        Do you provide ongoing support after completing the UI & UX design project?
                                    </h2>
                                    <p className='text-[20px] text-[#07152C] font-medium font-primary leading-[150%] mt-4'>
                                        We offer a wide range of UI UX services for startups to kickstart your success. We provide design, branding, and user research to establish a strong foundation. Our services also include app design, customer analysis, and design research to understand your users deeply. We ensure seamless implementation with developers, focus on interactivity and animation, and adapt designs to all device screen sizes.
                                    </p>
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </Container>
            </section>
        </>
    )
}

export default Frequently
