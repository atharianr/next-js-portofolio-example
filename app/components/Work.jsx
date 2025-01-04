import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>My Portofolio</h4>
            <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>

            <p className='text-center mx-auto mt-5 mb-12 max-w-2xl font-Ovo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur sollicitudin magna, ac porta ligula condimentum id.</p>

            <div className='grid grid-cols-auto my-10 gap-5'>
                {workData.map((project, index) => (
                    <div key={index} style={{ backgroundImage: `url(${project.bgImage})` }} className='aspect-square bg-cover bg-no-repeat bg-center rounded-lg relative cursor-pointer group'>
                        {/* <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2'> */}
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between group-hover:bottom-7 duration-500'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                <Image src={assets.send_icon} alt='Send icon' className='w-5' />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <a href="" className='flex w-max items-center border mx-auto px-8 py-2 rounded-full gap-2 hover:bg-lightHover duration-500'>Show more <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4' /></a>
        </div>
    )
}

export default Work
