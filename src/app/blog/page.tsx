import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const blog = () => {
  return (
    <div>
       <div
      className="flex flex-col items-center justify-center py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-image.png')" }}>
         {/* Logo */}
           <div >
             <svg
               className="h-8 w-8 text-yellow-500"
               viewBox="0 0 24 24"
               fill="currentColor"
             >
               <path d="M12 3L2 12h3v8h14v-8h3L12 3z" />
             </svg>
           </div>
      <div className="bg-transparent bg-opacity-80 px-8 py-6 rounded-md shadow-lg text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">Blog</h2>
         {/* Breadcrumb */}
           <div className="mt-4 flex items-center space-x-2 text-sm text-black">
             <Link href="/" className="underline underline-offset-2 hover:underline font-bold ">
               Home
             </Link>
             <span>›</span>
             <Link className="hover:underline" href='/about'>Blog</Link>
           </div>
        </div>
        </div>
         {/* Blog Card */}
         <div className="flex flex-col items-center space-y-4">
                <div>
                  <Image
                    src="/blog-3.png"
                    alt="Blog Image 1"
                    width={500}
                    height={200}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Handmade pieces that took time to make</h3>
                <p className="text-gray-600 w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                <div>
                  <Image
                    src="/blog-1.png"
                    alt="Blog Image 1"
                    width={500}
                    height={200}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Exploring new ways of decorating</h3>
                <p className="text-gray-600 w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                <div>
                  <Image
                    src="/blog2.png"
                    alt="Blog Image 1"
                    width={500}
                    height={200}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Going all-in with millennial design</h3>
                <p className="text-gray-600 w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                </div>
         {/* Footer */}
       <div className="bg-[#FDF7FC] px-4 py-16">
         <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
           <div className="space-y-2">
             <h3 className="text-lg font-medium">Free Delivery</h3>
             <p className="text-sm text-muted-foreground">
               For all orders over $50, consectetur adipim scing elit.
             </p>
           </div>
           <div className="space-y-2">
             <h3 className="text-lg font-medium">90 Days Return</h3>
             <p className="text-sm text-muted-foreground">
               If goods have problems, consectetur adipim scing elit.
             </p>
           </div>
           <div className="space-y-2">
             <h3 className="text-lg font-medium">Secure Payment</h3>
             <p className="text-sm text-muted-foreground">
               100% secure payment, consectetur adipim scing elit.
             </p>
           </div>
         </div>
         </div>
    </div>
  )
}

export default blog
