import React from 'react'

const Bookacall = () => {
    return (
        <>
            <div className='flex flex-wrap md:noflex-wrap md:mx-20'>
                <div className='left md:w-1/2 w-full h-72 md:py-16 md:px-10 p-4'>
                    <p className='pr-10'>
                      Our Fractional CRO/UX service provides a team of expert who act as your CRO/UX department. Deep diving into data, uncovering insights and providing actionable suggestions to drive improvement.  
                    </p>
                    <p className='pt-6 pr-10 '>
                      We leverage your team's expertise to determine execition and priorities . Unlock your teams full protential of data-driven growth with our support and guidance.
                    </p>
                    <button className='font-semibold tracking-tight bg-green-400 hover:bg-white duration-700 py-2 px-4 my-4 rounded-md'>Book a Call</button>
                </div>
                <div className='right md:w-1/2 w-full flex md:justify-start justify-center pt-20'>
                    <img src="/cro.png" className='p-2 h-60 w-80' alt="" />
                </div>
            </div>
        </>
    )
}

export default Bookacall
