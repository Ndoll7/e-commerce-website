"use client"

import React from 'react'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhone , FaClock } from "react-icons/fa";

const contact = () => {
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
        <h2 className="text-4xl font-extrabold text-gray-800">Contact</h2>
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
        <div className="flex-grow px-4 py-12 bg-white items-center text-center">
             <h2 className="text-2xl font-bold">Get In Touch With Us</h2>
      <p className="text-gray-600">
        For more information about our products and services, please feel free to drop us </p>
       <p  className="text-gray-600">
         an email. Our staff will always be there to help you out.
      </p>
      </div>
        <div className="flex-grow px-4 py-12 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
    {/* Left Column - Contact Info */}
    <div className="space-y-8">
     
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-black text-xl" />
          <div>
            <h3 className="text-lg font-bold">Address</h3>
            <p className="text-gray-600">
              236 5th SE Avenue, New York NY10000, United States
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaPhone className="text-black text-xl" />
          <div>
            <h3 className="text-lg font-bold">Phone</h3>
            <p className="text-gray-600">Mobile: (+84) 546-6789</p>
            <p className="text-gray-600">Hotline: (+84) 456-6789</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaClock className="text-black text-xl" />
          <div>
            <h3 className="text-lg font-bold">Working Time</h3>
            <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
            <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>
      </div>
    </div>
    {/* Right Column - Form */}
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Abc"
            className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-800"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="abc@email.com"
            className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-800"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-600">Subject</label>
          <input
            id="subject"
            type="text"
            placeholder="This is optional"
            className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-800"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
          <textarea
            id="message"
            placeholder="Hi! I'd like to ask about..."
            rows={4}
            className="mt-1 block w-full border rounded-md px-3 py-2 text-gray-800"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
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

      
  


export default contact





