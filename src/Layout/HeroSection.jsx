import { useState, useEffect } from 'react'
import LightRays from '../components/Background/LightRays'
import dataHome from '../data/home.json'
import Dock from '../components/Nav/Dock';
import Navbar from '../components/Nav/Navbar';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
// import  Lanyard from '../components/Lanyard/Lanyard';
import ShinyText from '../components/ShinyText/ShinyText';

const Name = ({ text, className }) => {
    return (
        <ShinyText
            text={text}
            speed={2}
            delay={0}
            color="#656565"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
            className={className}
        />)
}

const MySkills = ({ items, className }) => {
    return (
        <TypeAnimation
            sequence={items}
            speed={50}
            deletionSpeed={75}
            className={className}
            repeat={Infinity}
        />
    )
}
const HeroSection = () => {

    const dataSosmed = [
        {
            icon: <FaLinkedin size={48} color='#ffffff' />,
            "name": "LinkedIn",
            "link": "https://www.linkedin.com/in/alif-athaullah-rasyad/"
        },
        {
            icon: <FaGithub size={48} color='#ffffff' />,
            "name": "GitHub",
            "link": "https://github.com/Athrsyd"
        },
        {
            icon: <FaInstagram size={48} color='#ffffff' />,
            "name": "Instagram",
            "link": "https://www.instagram.com/athrsyd__/"
        }
    ]

    return (
        <div className='flex justify-center w-full' id='home'>
            <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1.2}
                    lightSpread={2}
                    rayLength={1.6}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0}
                    distortion={0.2}
                    className="custom-rays h-screen"
                    pulsating={false}
                    fadeDistance={0.9}
                    saturation={1}
                />
            </div>

            <div className="container relative z-100 h-screen flex justify-between items-center sm:flex-row flex-col-reverse px-4 mt-8 ">

                <div className="w-full sm:w-1/2 justify-between flex gap-8 flex-col text-center sm:text-left">
                    <div className="">

                        <h1 className="text-xl sm:text-6xl font-bold text-white  mb-4">
                            {dataHome.title}
                        </h1>
                        <p className="text-md sm:text-xl text-gray-300">
                            {dataHome.description}
                        </p>
                    </div>
                    <div className="">
                        <p >
                            <Name text={'Nama saya ' + dataHome.name} className="text-xl sm:text-2xl text-gray-300 font-bold" /><br /> 
                            <MySkills items={dataHome.skills} className="text-2xl sm:text-3xl text-gray-300 font-bold" /></p>
                    </div>

                    <div className="flex flex-col gap-4 ">

                        <div className="buttons flex justify-center sm:justify-start flex-row gap-4 sm:gap-8">
                            <a href="#about">

                                <button className='rounded-xl cursor-pointer bg-[#1F1F1F] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#2F2F2F] hover:shadow-lg hover:shadow-violet-500/30 active:scale-95'>
                                    About me
                                </button>
                            </a>
                            <a href="#projects">
                                <button className='rounded-xl cursor-pointer bg-[#7C3AED] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#8B5CF6] hover:shadow-lg hover:shadow-[#FFFFF] active:scale-95 hover:scale-105'>
                                    My Projects
                                </button>
                            </a>
                        </div>

                        <div className="sosmed">
                            <ul className=' flex justify-center sm:justify-start flex-row gap-4 sm:gap-8 mt-4'>
                                {dataSosmed.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className='inline-block hover:scale-110 transition-transform duration-300 hover:-translate-y-2 transform'>
                                            {item.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 ">
                    {/* <Lanyard /> */}
                </div>

            </div>
        </div>

    )
}

export default HeroSection