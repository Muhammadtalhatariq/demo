import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenuSharp } from "react-icons/io5";


const Header = () => {
    const [isopen, setisopen] = useState(false)
    const handleMenu = () => {
        setisopen(!isopen)
    }
    return (
        <>
            <div className='flex justify-between items-center md:p-4 md:mx-20'>
                <div className='hidden md:flex'>logo</div>
                <div>
                    <ul className='md:flex hidden gap-6 pl-40'>
                        <li>
                            <a className='font-semibold' href="/Results">Results</a>
                        </li>
                        <li>
                            <a className='font-semibold' href="/pricing">pricing</a>
                        </li>
                        <li>
                            <a className='font-semibold' href="/About">About</a>
                        </li>
                    </ul>
                </div>
                <div className=' hidden md:flex gap-4'>
                    <button className='font-semibold tracking-tight hover:bg-green-500 duration-700 p-2 rounded-md'>Login</button>
                    <button className='font-semibold tracking-tight bg-green-500 duration-700 hover:bg-white py-2 px-4 rounded-md'>Create an account</button>
                </div>

                {/* mvl view  */}
                <div onClick={handleMenu} className='flex justify-between items-center md:hidden w-full m-4'>
                  <div>logo</div>
                    <div>
                        <IoMenuSharp className='md:hidden' />
                    </div>
                    {isopen && <div className='fixed top-10 left-0 flex-col justify-center items-center md:hidden bg-neutral-100 duration-1000 w-96 pt-2'>
                        <ul className='flex justify-center items-center gap-3 my-3 flex-col'>
                            <li>
                                <a className='font-semibold' href="/Results">Results</a>
                            </li>
                            <li>
                                <a className='font-semibold' href="/pricing">pricing</a>
                            </li>
                            <li>
                                <a className='font-semibold' href="/About">About</a>
                            </li>
                        </ul>
                        <div className='flex gap-4 flex-col'>
                            <button className='font-semibold tracking-tight rounded-md'>Login</button>
                            <button className='font-semibold tracking-tight bg-green-500 py-2 px-4 rounded-md'>Create an account</button>
                        </div>
                    </div>}
                </div>

            </div>
        </>
    )
}

export default Header
