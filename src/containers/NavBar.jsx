import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import searchIcon from '../assets/icon-search.svg'
import menuIcon from '../assets/icon-menu.png'
import closeIcon from '../assets/icon-close.svg'

const NavBar = () => {

    const [open, isOpen] = useState(false);

    const handleMenuClick = () => {
        isOpen(!open)
    }

    return (
        // <nav className=' w-screen h-20 flex justify-between items-center ml-10 mr-10 bg-black'>
        //     <Link to={"/"} className=' text-black uppercase font-bold text-xl'>Logo</Link>
        //     <div className=' flex items-center gap-8'>

        //         <ul className=' flex gap-5 text-gray-400 font-medium sm:block' >
        //             <li><Link to={"/store"}>Store</Link></li>
        //             <li><Link to={"/about"}>About</Link></li>
        //             <li><Link to={"/support"}>Support</Link></li>
        //             <li><Link to={"/contact"}>Contact</Link></li>
        //         </ul>
        //         <div className=' border-solid border-2 w-60 h-10 border-gray-300 rounded-full flex items-center pl-4 justify-between'>
        //             <input type="text" placeholder='Search' className=' w-40 h-fit outline-none' />
        //             <div className=' border-solid border-gray-300 border-l-2 h-full rounded-r-full w-10 flex items-center justify-center bg-gray-100'>
        //                 <img src={searchIcon} width={16} height={16} alt="" />
        //             </div>
        //         </div>
        //         <img src={menuIcon} width={16} height={16} alt="" />

        //     </div>

        // </nav>
        <nav className=' h-20 flex justify-between items-center ml-5 mr-5'>

            <Link to={"/"} className=' text-black uppercase font-bold text-xl'>Logo</Link>
            <div className='flex items-center gap-8'>

                <ul className={` ${open ? "" : "hidden"} text-gray-400 bg-white shadow-md font-medium absolute right-0 w-2/4 flex flex-col justify-start h-screen pl-10 pt-10 bottom-0 gap-10 md:relative md:flex-row md:h-fit md:w-fit md:items-center md:justify-center md:flex md:right-auto md:p-0 md:shadow-none`}>
                    <li><Link to={"/store"}>Store</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/support"}>Support</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>

                <div className=' border-solid border-2 w-60 h-10 border-gray-300 rounded-full flex items-center pl-4 mr-5 justify-between'>
                    <input type="text" placeholder='Search' className=' w-40 h-fit outline-none' />
                    <div className=' border-solid border-gray-300 border-l-2 h-full rounded-r-full w-10 flex items-center justify-center bg-gray-100'>
                        <img src={searchIcon} width={16} height={16} alt="" />
                    </div>
                </div>
                <img className=' absolute right-0 mr-3 md:hidden' src={open ? closeIcon : menuIcon} onClick={handleMenuClick} width={16} height={16} alt="" />
            </div>

        </nav>
    )
}

export default NavBar