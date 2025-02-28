import React, { useEffect, useState } from 'react'
import { RiResetRightFill } from "react-icons/ri";

const Calculator = () => {
    const [range, setrange] = useState(9)
    const [short, setshort] = useState(0)
    const [long, setlong] = useState(0)
    const [runmyself, setrunmyself] = useState(0)
    const [expert, setexpert] = useState(0)
    const [total, settotal] = useState(0)


    const result = () => {
        let total = short * range + expert
        if (runmyself === 200) {
            total = short * range + runmyself
        }
        if (long === 80) {
            total = long * range + expert
        }
        if (long === 80 && runmyself === 200) {
            total = long * range + runmyself
        }

        settotal(total)
    }

    useEffect(() => {
        result()
    }, [runmyself, expert, range])

    const handlerange = (e) => {
        if (e.target.value <= 20) {
            setrange(e.target.value)
        }
    }

    return (
        <>
            <div className='flex justify-center items-center flex-col md:py-16 py-6'>
                <p className='bg-neutral-700 rounded-t-full px-8 py-1 text-neutral-300 text-[10px] tracking-[2px]'>PAY ONLY FOR WHAT YOU USE</p>
                <div className='bg-neutral-800 text-white p-2 md:w-4/5 w-full md:h-[400px] h-[1000px] flex flex-wrap '>
                    {/* left section  */}
                    <div className='left w-full md:w-1/2 p-3'>
                        <div>
                            <h1 className='font-semibold'>Study Length</h1>
                            <div className='flex gap-4 flex-wrap md:flex-nowrap'>
                                <div onClick={() => setshort(40)} className={`md:w-64 w-80 h-24 border border-neutral-700 mt-4 flex  cursor-pointer ${short === 40 && long === 0 ? 'border-blue-400' : ''} `}>
                                    <div className={`w-7 h-4 bg-neutral-600 rounded-r-full my-10 flex justify-end items-center pr-1 ${short === 40 && long === 0 ? 'bg-blue-400' : ''} `}>
                                        <div className='size-3 bg-black rounded-full '></div>
                                    </div>
                                    <div className='flex pl-4 flex-col space-y-1 py-2'>
                                        <h1 className='font-semibold'>Short & Focused</h1>
                                        <h5 className='text-neutral-500 text-sm'>Up to 10 mints</h5>
                                        <h5 className='text-neutral-500 text-sm'>Up t0 5 questions or tasks</h5>
                                    </div>

                                </div>
                                <div onClick={() => setlong(80)} className={`md:w-64  w-80  h-24 border border-neutral-700 mt-4 flex cursor-pointer ${long === 80 && short === 0 ? 'border-blue-400' : ''} `}>
                                    <div className={`w-7 h-4 bg-neutral-600 rounded-r-full my-10 flex justify-end items-center pr-1 ${short === 0 && long === 80 ? 'bg-blue-400' : ''} `}>
                                        <div className='size-3 bg-black rounded-full '></div>
                                    </div>
                                    <div className='flex pl-4 flex-col space-y-1 py-2'>
                                        <h1 className='font-semibold'>Long & Detailed</h1>
                                        <h5 className='text-neutral-500 text-sm'>Up to 20 mints</h5>
                                        <h5 className='text-neutral-500 text-sm'>Up t0 20 questions or tasks</h5>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='space-y-2 mt-4'>
                            <h1 className='font-semibold'>Numbers of reviewers</h1>
                            <div className='flex items-center gap-4'>
                                <input className='cursor-pointer custom-range' value={range} onChange={handlerange} type="range" /> <span className='text-neutral-500 text-sm'>{range} Reviewers</span>
                            </div>
                        </div>
                        <div className='mt-8 md:mt-4'>
                            <h1 className='font-semibold'>Choose your adventure</h1>
                            <div className='flex gap-4 flex-wrap md:flex-nowrap'>
                                <div className={`md:w-64 w-80 h-24 border border-neutral-700 mt-4 flex cursor-pointer ${runmyself === 200 && expert === 0 ? 'border-blue-400' : ''} `}>
                                    <div className={`w-10 h-4 bg-neutral-600 rounded-r-full my-10 flex justify-end items-center pr-1 ${ runmyself === 200 && expert === 0 ? 'bg-blue-400' : ''} `}>
                                        <div className='size-3 bg-black rounded-full '></div>
                                    </div>
                                    <div onClick={() => setrunmyself(200)} className='flex justify-center flex-col p-2 pl-4  cursor-pointer'>
                                        <h1 className='font-semibold'>Run the study myself</h1>
                                        <h5 className='text-neutral-500 text-sm'>Do It Yourself -</h5>
                                        <h5 className='text-neutral-500 text-sm tracking-tight'>Watch feedback. create your own insights ans solutions</h5>
                                    </div>
                                </div>
                                <div className={`md:w-64 w-80 h-24 border border-neutral-700 mt-4 flex  cursor-pointer ${expert === 500 && runmyself === 0 ? 'border-blue-400' : ''} `}>
                                    <div className={`w-10 h-4 bg-neutral-600 rounded-r-full my-10 flex justify-end items-center pr-1 ${expert === 500 && runmyself === 0 ? 'bg-blue-400' : ''} `}>
                                        <div className='size-3 bg-black rounded-full '></div>
                                    </div>
                                    <div onClick={() => setexpert(500)} className='flex justify-center flex-col p-2 pl-4  cursor-pointer'>
                                        <h1 className='font-semibold'>Have an expert do it</h1>
                                        <h5 className='text-neutral-500 text-sm'>Done  For You -</h5>
                                        <h5 className='text-neutral-500 text-sm tracking-tight'>Experts analyze feedback for insights and advice solutions</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right section  */}
                    <div className='right w-full md:w-1/2'>
                        <div className='flex justify-center items-center '>
                            <div className='md:w-[440px] w-80 md:h-64 h-40 bg-neutral-700 flex justify-center items-center md:my-4  cursor-pointer'>
                                <div className='flex flex-col'>
                                    <h4 className='text-blue-400 text-md'>PRICE OF STUDY IS</h4>
                                    <h1 className='text-center font-bold text-6xl'>${total}</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-6 pt-4 md:pt-0'>
                            <button onClick={() => window.location.reload()} className='bg-white text-black hover:bg-green-500 duration-700 px-2 py-2 md:px-8 font-bold rounded-md flex gap-1 items-center cursor-pointer rounded-md' > <RiResetRightFill size={15} color='black' /> <span>Reset</span></button>
                            <button className='font-bold md:px-8 px-2 py-2 bg-green-500 text-black rounded-md cursor-pointer hover:bg-white duration-700 rounded-md'>Sign up and launch in minutes</button>
                        </div>
                        <p className='text-center text-sm text-neutral-500 py-4'>No cradit card required until you're ready to launch your study </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Calculator
