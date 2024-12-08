import React from 'react'
import Image from 'next/image'
import { Container } from 'postcss'
import { Button } from './ui/button'


const hero = () => {
  return (
  < section className='bg-bannerImg relative bg-no-repeat bg-cover bg-bottom w-full h-screen'>
    <div className='absolute right-12 top-36 '>
        <h4 className=' bg-[#FFF3E3] pt-10 pl-8 font-bold '>
            New Arrival
        <h1 className=' pt-2 text-3xl text-[#B88E2F] '>Discover Our</h1>
                 <h1 className=' text-4xl mb-3 font-bold text-[#B88E2F]'>New Collection</h1>
            <h6 className='text-sm pr-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
             numquam quo, ipsa expedita eius voluptate  </h6>
            <Button className='text-white bg-[#B88E2F] mt-5 mb-5'>Buy Now</Button>
        </h4>
    </div>
  </section>
  )
}

export default hero
