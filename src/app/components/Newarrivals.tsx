import React from 'react'
import Image from 'next/image'

const Newarrivals: React.FC = () => {
  return (
    <section className='bg-[#FBF5DC] py-12 grid grid-cols md:grid-cols-2 items-center gap-20 w-full'>
        <div className='container mx-auto px-4 md:px-16 w-full h-auto'>
            {/* Image Section */}
            <Image
            src="/newarrival.png"
            alt='Asgard Sofa'
            width={1600}
            height={1600}
            className='w-full object-contain'
            />
        </div>
        {/* Text Section*/ }
        <div className='text-center md:text-left space-y-6 '>
            <p className='text-lg font-medium text-gray-600 '>New Arrivals</p>
            <h2 className='text-4xl font-bold text-gray-800 '>Asgaard Sofa</h2>
            <a href='/shop' className='inline-block bg-transparent text-gray-800 border border-black  font-medium px-8 py-3 mt-4 hover:bg-white transition'>
                Order Now
            </a>
        </div>
    </section>
  )
}

export default Newarrivals
