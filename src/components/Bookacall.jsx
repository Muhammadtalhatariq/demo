import React from 'react'

const Bookacall = () => {
    return (
        <>
            <div className='flex flex-wrap md:noflex-wrap md:mx-20'>
                <div className='left md:w-1/2 w-full h-72 md:py-16 md:px-10 p-4'>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aut quos deserunt adipisci, eveniet ex in consectetur rerum sequi, doloremque ullam, esse fugiat sapiente dignissimos neque quas asperiores dolor? In.
                    </p>
                    <p className='pt-6'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aut quos deserunt adipisci, eveniet ex in consectetur rerum sequi, doloremque ullam, esse fugiat sapiente dignissimos neque quas asperiores dolor? In.
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
