import React from 'react'
import { toppicks , product} from '../TopPicksData'
import Image from 'next/image'

const TopPicks: React.FC = () => {
  return (
    <section className='py-12 bg-white'>
        <div className='container mx-auto px-4'>
            {/* Heading Section */}
            <div className='text-center mb-12'>
                <h2 className='text-3xl font-bold text-gray-800'>Top Picks For You</h2>
                <p className='text-gray-600 mt-2'>Find a bright ideal to suit your taste with our grate selection of suspension,floor,and table lights</p>
            </div>

            {/* Product Grid*/}
            <div className='grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-8'>
                {toppicks.map((product: product)=> (
                    <div key={product.id} className='flex flex-col items-center text-center space-y-4'>
                        {/* Product Image */}
                        <Image
                         width={300}
                         height={300}
                        src={product.image}
                        alt={product.name}
                        className='w-full max-w-xs h-auto object-contain'
                        />
                        {/* Product Name*/}
                        <h3 className='text-lg font-medium text-gray-600'>{product.name}</h3>
                        <p className='text-lg font-semibold text-gray-800'>{product.price}</p>
                        </div>
                ))}
            </div>

            {/* View More Button*/}
            <div className='text-center mt-12'>
                <a href='#' className='inline-block font-medium text-black underline hover:no-underline hover:text-gray-800 transition'>
                    View More
                </a>
            </div>
        </div>
    </section>  
)
}

export default TopPicks
