import React from 'react'

const Program = () => {
  return (
    <div className='flex flex-col items-center' id='program'>
        <span className='text-lg font-semibold capitalize h-nav text-nav-bg'>our program</span>
        <h3 className='text-3xl font-bold capitalize'>what we offer</h3>
        {/* imgs */}
        <div className='flex w-[70%] flex-col justify-center gap-10 pt-10 imgs-div md:flex-row'>
            <div className='relative group  basis-[31%]'>
                <img src="/assets/program-2.png" alt="" className='w-full rounded-xl' />
                <div className='transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute bg-[#000f984d] top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center w-full gap-3 capitalize'>
                    <img src="/assets/prog-2-img.png" alt="" />
                    <p className='font-semibold text-white '>master degree</p>
                </div>
            </div>

            <div className='relative group  basis-[31%]'>
                <img src="/assets/program-1.png" alt="" className='w-full rounded-lg' />
                <div className='transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute bg-[#000f984d] top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center w-full gap-3 capitalize'>
                    <img src="/assets/prog-1-img.png" alt="" />
                    <p className='font-semibold text-white capitalize'>graduation degree</p>
                </div>
            </div>

            <div className='relative group  basis-[31%]'>
                <img src="/assets/program-3.png" alt="" className='w-full rounded-xl' />
                <div className='transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute bg-[#000f984d] top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center w-full gap-3 capitalize'>
                    <img src="/assets/prog-3-img.png" alt="" />
                    <p className='font-semibold text-white capitalize'>post graduation</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Program