import React, { useEffect, useState } from 'react'
import circle from '../assets/cirkel.svg'
import aboutData from '../data/about.json'
import { delay, motion } from 'framer-motion'

const AboutCardTablet = () => {
    const transition = { duration: 0.6, ease: 'easeOut' }

    const cardVariants = [
        { initial: { x: -60, skewX: -10, opacity: 0 }, },  // kiri atas
        { initial: { x: 60, skewX: 10, opacity: 0 }, },  // kanan atas
        { initial: { x: -60, skewX: -10, opacity: 0 }, },  // kiri bawah
        { initial: { x: 60, skewX: 10, opacity: 0 }, },  // kanan bawah
    ]

    const inView = { x: 0, skewX: 0, opacity: 1 }

    return (
        <div className="w-full h-full px-6 md:px-16 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {aboutData.data.slice(0, 4).map((item, index) => (
                    <motion.div
                        key={index}
                        initial={cardVariants[index].initial}
                        whileInView={inView}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ ...transition, delay: index * 0.1 }}
                        className="bg-neutral-900 rounded-3xl py-6 px-6 border border-gray-600 z-20 flex flex-col justify-center items-center gap-4"
                    >
                        <p className="text-lg text-center">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )

}

const AboutCardDesktop = () => {
    const transition = { duration: 0.6, ease: 'easeOut', delay:0.5 }

    return (
        <div className="w-full h-full" style={{ perspective: '1800px' }}>

            {/* Card 1 - kiri atas */}
            <motion.div
                initial={{ top: '360px', left: '370px', rotateY: 0, opacity: 0 }}
                whileInView={{ top: '40px', left: '70px', rotateY: 25, opacity: 1 }}
                transition={transition}
                style={{ position: 'absolute', transformStyle: 'preserve-3d' }}
                className="max-w-100 hover:-translate-y-2 duration-300  cursor-pointer bg-neutral-900 rounded-3xl py-4 border border-gray-600 z-20 flex flex-col justify-center items-center gap-4 px-4">
                <p className="text-md text-center">{aboutData.data[0].text}</p>
            </motion.div>

            {/* Card 2 - kanan atas */}
            <motion.div
                initial={{ top: '360px', right: '370px', rotateY: 0, opacity: 0 }}
                whileInView={{ top: '40px', right: '70px', rotateY: -25, opacity: 1 }}
                transition={transition}
                style={{ position: 'absolute', transformStyle: 'preserve-3d' }}
                className="max-w-100  hover:-translate-y-2 duration-300 ease-in-out cursor-pointer bg-neutral-900 rounded-3xl py-4 border border-gray-600 z-20 flex flex-col justify-center items-center gap-4 px-4">
                <p className="text-md text-center">{aboutData.data[1].text}</p>
            </motion.div>

            {/* Card 3 - kiri bawah */}
            <motion.div
                initial={{ top: '360px', left: '370px', rotateY: 0, rotateX: 0, opacity: 0 }}
                whileInView={{ top: '360px', left: '70px', rotateY: 28, rotateX: 8, opacity: 1 }}
                transition={{ ...transition, delay: 0.15 }}
                style={{ position: 'absolute', transformStyle: 'preserve-3d' }}
                className="max-w-100 hover:-translate-y-2 duration-300  cursor-pointer bg-neutral-900 rounded-3xl py-4 border border-gray-600 z-20 flex flex-col justify-center items-center gap-4 px-4">
                <p className="text-md text-center">{aboutData.data[2].text}</p>
            </motion.div>

            {/* Card 4 - kanan bawah */}
            <motion.div
                initial={{ top: '360px', right: '370px', rotateY: 0, rotateX: 0, opacity: 0 }}
                whileInView={{ top: '360px', right: '70px', rotateY: -24, rotateX: -8, opacity: 1 }}
                transition={{ ...transition, delay: 0.15 }}
                style={{ position: 'absolute', transformStyle: 'preserve-3d' }}
                className="max-w-100 hover:-translate-y-2 duration-300  cursor-pointer bg-neutral-900 rounded-3xl py-4 border border-gray-600 z-20 flex flex-col justify-center items-center gap-4 px-4">
                <p className="text-md text-center">{aboutData.data[3].text}</p>
            </motion.div>

        </div>
    )
}

const AboutMe = () => {

    return (
        <div className="w-full  relative h-auto md:h-screen flex flex-col  bg-black text-white" id='about'>

            <h1 className="relative z-20 text-center mt text-8xl font-bold">About Me</h1>

            <div className='hidden lg:block'>
                {/* lingkaran diposisikan center secara horizontal */}
                <img
                    src={circle}
                    alt="circle"
                    className="h-8/10 absolute z-0 bottom-0 left-1/2 to -translate-x-1/2"
                />
            </div>
            <div className="block lg:hidden ">
                <AboutCardTablet />
            </div>
            <div className="hidden lg:block ">
                <AboutCardDesktop />
            </div>
        </div>

    )
}

export default AboutMe