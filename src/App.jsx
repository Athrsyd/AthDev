import { useState, useEffect } from 'react'
import HeroSection from './Layout/HeroSection'
import Navbar from './components/Nav/Navbar'
import Dock from './components/Nav/Dock'
import { FaUser, FaWrench } from "react-icons/fa";
import { CiTrophy } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import AboutMe from './Layout/AboutMe'
// import AnimatedCursor from "react-animated-cursor"

import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import Education from './Layout/Education';
const App = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const items = [
    { icon: <VscHome size={24} color='#ffffff' />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <FaUser size={24} color='#ffffff' />, label: 'About Me', onClick: () => alert('Archive!') },
    { icon: <FaWrench size={24} color='#ffffff' />, label: 'Projects', onClick: () => alert('Profile!') },
    { icon: <CiTrophy size={24} color='#ffffff' />, label: 'Achievements', onClick: () => alert('Settings!') },
    { icon: <MdOutlineMessage size={24} color='#ffffff' />, label: 'Contact Me', onClick: () => alert('Settings!') },
  ];
  return (
    <>

      <Navbar className="hidden sm:flex" />

      <HeroSection />
      <AboutMe />
      <Education />


      <div className="block sm:hidden ">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          className={`fixed z-999 left-1/2 transform -translate-x-1/2 bg-[#120F17] border-neutral-700 border-2  shadow-md ${scrolled ? 'bottom-4 ' : '-bottom-100 '}`}
        />
      </div >
    </>
  )
}

export default App