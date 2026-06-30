import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import techStackData from '../data/techStack.json'

const TechStack = () => {
    const [hoveredTech, setHoveredTech] = useState(null)


    return (
        <div className='w-full px-8 flex justify-center flex-col py-4'>

            <div className="title w-full flex justify-center items-center mt-4">
                <h1 className="text-7xl font-bold text-gray-500/30">My Tech Stack</h1>
            </div>
            <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 gap-x-12 mt-16">
                {techStackData.map((tech, index) => (
                    <div
                        key={index}
                        className="saturate-0 hover:saturate-100 hover:-translate-y-2 hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out flex flex-col justify-center items-center gap-2"
                        onMouseEnter={() => setHoveredTech(tech.id)}
                        onMouseLeave={() => setHoveredTech(null)}
                    >
                        {hoveredTech === tech.id && (
                            <>
                                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-neutral-800 p-2 min-w-32 rounded-lg shadow-lg z-10">
                                    <h2 className="text-lg text-center font-bold">{tech.name}</h2>
                                </div>
                                <div className="triangle absolute -top-8 left-1/2 transform -translate-x-1/2 bg-neutral-800 p-2 rounded-sm rotate-45 w-5 h-5 shadow-lg z-10"></div>
                            </>
                        )}
                        <motion.img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-16 h-16 mb-2"
                            initial={{ opacity: 0, y: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.125, duration: 0.5 }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack