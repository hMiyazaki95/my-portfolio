import { CodeBracketSquareIcon, RocketLaunchIcon } from '@heroicons/react/20/solid';
import React from 'react';

const Services = () => {
    return (
        <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
            <p className="heading">
                My <span className="text-yellow-400">Services</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-start gap-[3rem] mt-[4rem] text-white">
                <div>
                    <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
                        <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                            Frontend
                        </h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                            LSkilled in building modern, responsive UIs using React, TypeScript, and Tailwind CSS. 
                            Developed dynamic interfaces with real-time updates, 
                            integrated markdown rendering, and optimized component reusability for seamless user experiences across devices.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
                        <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                            Backend
                        </h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                            Experienced in creating secure, 
                            scalable server-side systems with Node.js and Express. 
                            Built RESTful and streaming APIs, implemented JWT-based authentication, 
                            and connected PostgreSQL and MongoDB for structured and unstructured data handling.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
                        <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                            Fullstack
                        </h1>
                        <p className="text-[15px] text-[#d3d2d2] font-normal">
                            Proficient in designing and deploying end-to-end web applications. 
                            Integrated OpenAI APIs, managed real-time chatbot flows, 
                            and handled subscriptions, authentication, 
                            and database architecture to deliver complete AI-powered user experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
