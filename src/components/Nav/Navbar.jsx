import { useState, useEffect, useRef } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import logo from '../../assets/logo/LogoFix.png'


const Navbar = ({ className }) => {
    const navLink = [
        { name: 'Home', href: '#home' },
        { name: 'About Me', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Achievements', href: '#achievements' },
    ]
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`
      fixed top-0 left-0 right-0 z-9999 items-center backdrop-blur-lg  justify-between px-8
      transition-all duration-300 ease-in-out
      ${scrolled
      ? 'h-20 bg-neutral-900/50 border-b border-transparent dark:bg-white-50/50 dark:border-transparent shadow-sm'
                : 'h-20 mx-8 mt-4 rounded-4xl dark:bg-neutral-800/50 border-b border-neutral-500 dark:border-white-400/50 shadow-sm'
            }
        ${className}`}>

            {/* Logo */}
            <a href="/" className="flex items-center gap-2 font-medium text-sm">
                <img src={logo} alt="Logo" className="h-15" />
            </a>

            <div className="flex items-center gap-1">
                {navLink.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white px-3 py-1.5 rounded-lg transition-colors duration-300 after:content-[''] after:block after:h-0.5 after:w-full after:mt-1 after:bg-neutral-900 dark:after:bg-white after:transition-all after:duration-500 after:scale-0 hover:after:scale-100"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            <button className="text-sm flex justify-center cursor-pointer transition-all duration-500 items-center font-medium bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 rounded-lg hover:opacity-80  hover:translate-x-1 ease-in-out">
                Contact me <FaLongArrowAltRight className="ml-2 mt-1" />
            </button>
        </nav>
    )
}

export default Navbar