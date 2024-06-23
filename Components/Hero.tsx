import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image' // Import the 'Image' component from the appropriate library
import { PlayCircleIcon, ArrowDownTrayIcon } from '@heroicons/react/20/solid'; // Import the 'PlayCircleIcon' and 'ArrowDownTrayIcon' components

const Hero = () => {
  return (
  <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center ">
    <Particle/>
    <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div> 
            <h1 className="text-[35px] md:text-[50px] text-white font-bold ">
            HI, I&apos;M <span className="text-yellow-400">Hajime!</span> 
            </h1>
            <p className="mt-[2rem] -[20px] text-[#ffffff92] ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, 
                rerum eum accusamus autem aperiam fugiat ullam. 
                Qui dolorum impedit aspernatur, deserunt officia minima dolore fugiat.
            </p>
            <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex sm:flex-row items-center sm:space-x-6">
                <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px]
                font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                    <p> Download Cv</p>
                    <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
                </button>
                <button className="flex items-center space-x-2">
                    <PlayCircleIcon className="w-[4rem] hover:text-yellow-400 transition-all duration-200
                    text-[#55e6a5]"/>
                    <p className="text-[20px] font-semibold text-white">Watch The Video </p>
                </button>

            </div>
            <TextEffect />
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
            <Image src="/images/u1.jpg" alt="user" layout="fill" className="object-cover rounded-full"/>
        </div>
    </div>
  </div>
  )
}

export default Hero
