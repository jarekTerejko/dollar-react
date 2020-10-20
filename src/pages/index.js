import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'





const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
           <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
           <Navbar isOpen={isOpen} toggleMenu={toggleMenu} /> 
        </>
    )
}

export default Home
