import React from 'react'
import { motion } from 'motion/react'
import educationData from '../data/education.json'
import ElectricBorder from '../components/ElectricBorder/ElectricBorder'

const lineHeights = { 1: 'h-124', 2: 'h-152', 3: 'h-100' }

const Education = () => {
  return (
    <div className="bg-neutral-100 w-full min-h-screen py-16 px-8 flex flex-col items-center overflow-x-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-7xl font-bold text-center text-gray-800 mb-20"
      >
        MY EDUCATION
      </motion.h1>

      <div className="relative w-full max-w-full">
        {educationData.schools.map((school) => {
          const isOdd = school.id % 2 !== 0 // ganjil -> kiri, genap -> kanan
          const slideFrom = isOdd ? -120 : 120

          const CardContent = (
            <motion.div
              initial={{ opacity: 0, x: slideFrom, rotate: isOdd ? -3 : 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            >
              <ElectricBorder
                color="#7C3AED"
                speed={1.5}
                chaos={0.1}
                thickness={2}
                style={{ borderRadius: '0.5em', padding: '' }}>
                <div className="card w-full max-w-md bg-neutral-900 border-4 border-[#7C3AED] rounded-xl shadow-lg shadow-purple-900/30 p-4">
                  <div className="container border border-neutral-700 bg-neutral-800 w-full h-42 rounded-xl"></div>
                  <div className="w-full mt-4 flex flex-col">
                    <h2 className="text-2xl font-bold text-white">{school.schoolName}</h2>
                    <p className="text-md text-gray-300 mt-1">{school.description}</p>

                    {school.nilaiLulus && (
                      <p className="text-md text-gray-300 mt-2">
                        Nilai Kelulusan: <span className="font-semibold text-white">{school.nilaiLulus}</span>
                      </p>
                    )}

                    {school.pretasi && (
                      <div className="mt-3">
                        <p className="font-semibold text-white">Prestasi:</p>
                        <ul className="list-disc list-inside text-gray-300">
                          {school.pretasi.map((p) => (
                            <li key={p.id}>
                              {p.prestasiName}{' '}
                              <span className="text-sm text-gray-400">({p.prestasiYear})</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>
          )

          const YearText = (
            <motion.h1
              initial={{ opacity: 0, x: -slideFrom * 0.6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
              className="text-7xl font-bold text-gray-800/30"
            >
              {school.schoolYear}
            </motion.h1>
          )

          return (
            <div key={school.id} className="relative w-full flex items-center mb-16 min-h-96">
              {/* circle di tengah, pop-in */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ amount: 0.6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.05 }}
                className="circle absolute left-1/2 -translate-x-1/2 w-15 h-15 bg-white border-4 border-neutral-900 rounded-full z-10"
              ></motion.div>

              {/* garis vertikal, tumbuh dari atas ke bawah */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ amount: 0.4 }}
                transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.1 }}
                style={{ transformOrigin: 'top' }}
                className={`line ${lineHeights[school.id] || 'h-100'} w-1 bg-neutral-900/80 absolute left-1/2 -translate-x-1/2 top-50`}
              ></motion.div>

              {isOdd ? (
                <>
                  <div className="w-1/2 flex justify-end items-center pr-24 gap-0">
                    {CardContent}
                  </div>
                  <div className="w-1/2 flex justify-start items-center pl-24">
                    {YearText}
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ amount: 0.6 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    style={{ transformOrigin: 'right' }}
                    className="absolute right-1/2 top-1/2 -translate-y-1/2 w-24 h-1 bg-neutral-900"
                  ></motion.div>
                </>
              ) : (
                <>
                  <div className="w-1/2 flex justify-end items-center pr-24">
                    {YearText}
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ amount: 0.6 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    style={{ transformOrigin: 'left' }}
                    className="absolute left-1/2 top-1/2 -translate-y-1/2 w-24 h-1 bg-neutral-900"
                  ></motion.div>
                  <div className="w-1/2 flex justify-start items-center pl-24">
                    {CardContent}
                  </div>
                </>
              )}
            </div>
          )
        })}

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{  amount: 0.6 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14 }}
        >
            <div className="w-75 relative z-100 flex justify-center items-center mx-auto h-16 bg-neutral-900 border-4 border-[#7C3AED] rounded-xl shadow-lg shadow-purple-900/30 p-4">
              <h1 className="text-md font-bold text-white">My Journey is not over yet...</h1>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Education