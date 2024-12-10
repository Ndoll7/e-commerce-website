import React from 'react'
import Image from 'next/image';

export interface items{
    id: number;
    name: string;
    image: string;
};

export const chairs: items[] = [
    {
        id: 9,
        name: "Side Table",
        image: "/side-table.png"
    },
    {
        id: 8,
        name: "Side Table",
        image: "/side-table2.png"
    }
]

const Heroone: React.FC = () => {
  return (
    <section className='bg-[#F7F7F7] py-12'>
        <div className='container mx-auto px-4 md:px-12 mt-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {chairs.map((items)=>(
                    <div key={items.id} className='flex flex-col items-center text-center space-y-4'>
                        {/* image */}
                        <div className='w-full max-w-sm'>
                            <Image 
                            width={500}
                            height={200}
                            src={items.image}
                            alt={items.name}
                            className='w-full h-auto object-contain'
                            />
                        </div>
                        {/* Name */}
                        <h2 className='text-2xl font-bold text-gray-800'>{items.name}</h2>
                        {/* view more link*/}
                        <a href='/shop' className='text-black font-medium underline hover:no-underline hover:text-gray-800 transition'>
                            View More
                        </a>
                        </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Heroone
