import Image from 'next/image'
import { MapIcon, MapPinIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Hero() {
  return (
    <>
    <div className ='w-full mt-[62px] h-[550px] lg:[650px]'>
        <div className ='relative w-full h-full'>
            <Image src = 'https://t3.ftcdn.net/jpg/03/03/57/06/360_F_303570636_xrCrT8AIOYkC9cO1xPXEpo9Dwob5mayZ.jpg' alt = '' className ='object-cover brightness-[40%]' objectFit='cover' fill={true} />
            <div className ='-mt-10 z-20 absolute max-w-5xl mx-auto top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full flex flex-col justify-center text-white'>
                <h1 className ='text-6xl md:text-7xl lg:text-8xl text-center font-bold'>Welcome to <span className ='uppercase text-yellow-400 md:block'>Food HUB</span></h1>
                <h2 className ='mt-3 md:text-center text-xl font-medium px-10 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repudiandae nihil officia aspernatur distinctio tenetur!</h2>
                <div className ='flex items-center w-[80%] mt-5 space-x-2 mx-auto justify-around p-2'>
                  <form className ='w-2/3 bg-white p-3 rounded-lg space-x-3 flex items-center'>
                    <MapPinIcon className = 'h-6 text-yellow-400' />
                    <input type='text' className ='flex-grow bg-transparent outline-none border-none placeholder:text-yellow-500 text-black font-semibold w-full placeholder:font-medium tracking-wider text-sm md:text-base lg:text-lg' placeholder='Enter Delivery Address...' />
                  </form>
                    <button className='bg-yellow-500 text-white p-3 rounded-lg font-semibold tracking-wider cursor-pointer hover:bg-yellow-500 text-sm md:text-base lg:text-lg whitespace-nowrap'>Send Order</button>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Hero