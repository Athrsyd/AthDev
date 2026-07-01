import React, { useEffect, useState } from 'react'
import ShinyText from '../components/ShinyText/ShinyText'
import dataProject from '../data/project.json'
import { Link } from 'react-router-dom'

const Title = ({ text, className }) => {
    return (
        <ShinyText
            text={text}
            speed={5}
            delay={0}
            color="#353535"
            shineColor="#808080"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
            className={className}
        />)
}

// helper untuk menentukan style transform berdasarkan posisi card
const getCardTransform = (index, total) => {
    const mid = (total - 1) / 2
    const offset = index - mid // negatif = kiri, 0 = tengah, positif = kanan

    if (offset === 0) return 'rotateY(0deg) translateZ(0px) scale(1)'
    const rotate = offset < 0 ? 8 : -8       // kartu kiri miring ke kanan, kartu kanan miring ke kiri
    const translateZ = -40                    // sedikit mundur biar kartu tengah lebih menonjol
    return `rotateY(${rotate}deg) translateZ(${translateZ}px) scale(1)`
}

const Projects = () => {
    const [project, setProject] = useState()

    useEffect(() => {
        const sorted = dataProject.projects
            .sort((a, b) => (b.yearEnd * 12 + b.monthEnd) - (a.yearEnd * 12 + a.monthEnd))
            .slice(0, 3)

        setProject(sorted)
    }, [])

    return (
        <div className='bg-neutral-900 px-24 py-16' id='projects'>
            <div className="container flex flex-row justify-between items-center ">
                <div className="w-1/2">
                    <Title className="text-7xl font-bold text-gray-500/30 h-30" text={'My Projects'} />
                </div>
                <div className="w-1/2 text-lg text-gray-500 font-bold text-justify">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At expedita officia quod, nihil suscipit nesciunt eos unde sapiente voluptatum hic.</p>
                </div>
            </div>

            {/* wrapper perspective */}
            <div
                className="container flex justify-center items-center gap-6 px-8 mt-8"
                style={{ perspective: '1200px' }}
            >
                {project?.map((item, i) => (
                    <div
                        key={i}
                        className={`card ${i === 1 && 'scale-95'} w-full cursor-pointer max-w-md bg-neutral-900 border-4 border-[#7C3AED] rounded-xl shadow-lg shadow-purple-900/30 p-4 transition-transform duration-500 ease-out hover:-translate-y-2`}
                        style={{
                            transform: getCardTransform(i, project.length),
                            transformStyle: 'preserve-3d',
                        }}
                        // onMouseEnter={(e) => {
                        //     e.currentTarget.style.transform = 'rotateY(0deg) translateZ(20px) scale(1)'
                        // }}
                        // onMouseLeave={(e) => {
                        //     e.currentTarget.style.transform = getCardTransform(i, project.length)
                        // }}
                    >
                        <div className="container border border-neutral-700 bg-neutral-800 w-full h-42 rounded-xl"></div>
                        <div className="w-full mt-4 flex flex-col">
                            <h2 className="text-md font-bold text-white">{(item.name).substring(0, 40) + '...'}</h2>
                            <p className='text-white/50'>{(item.description).substring(0, 100) + '.....'}</p>
                            <p className="text-md text-gray-300 mt-2">
                                Peran saya: <span className="font-semibold text-white">{item.berperan}</span>
                            </p>
                        </div>
                        <div className="flex justify-center items-center mt-4 my-4">
                            <Link to={'/projects'} className='rounded-xl cursor-pointer bg-[#7C3AED] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#8B5CF6] hover:shadow-lg hover:shadow-[#FFFFF] active:scale-95 hover:scale-105'>
                                View More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Projects