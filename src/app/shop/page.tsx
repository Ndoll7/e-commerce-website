"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Filter, Grid, List } from 'lucide-react'
import { Select, SelectContent,SelectItem,SelectTrigger,SelectValue,  } from '@/components/ui/select'

interface Product {
    id: string
    name: string
    price: number
    image: string
  }
  
  const products: Product[] = [
    {
      id: "1",
      name: "Trenton modular sofa_3",
      price: 25000.00,
      image: "/sofa-3.png",
    },
    {
      id: "2",
      name: "Outdoor bar table and stool",
      price: 25000.00,
      image: "/bar-table.png",
    },
    {
      id: "3",
      name: "Granite dining table with dining chair",
      price: 25000.00,
      image: "/dining-table.png",
    },
    {
      id: "4",
      name: "Plain console with teak mirror",
      price: 25000.00,
      image: "/teak-mirror.png",
    },
    {
      id: "5",
      name: "Grain coffee table",
      price: 15000.00,
      image: "/pic-6.png",
    },
    {
      id: "6",
      name: "Kent coffee table",
      price: 225000.00,
      image: "/pic7.png",
    },
    {
      id: "7",
      name: "Round coffee table_color 2",
      price: 251000.00,
      image: "/pic13.png",
    },
    {
      id: "8",
      name: "Reclaimed teak coffee table",
      price: 25200.00,
      image: "/pic17.png",
    },
    {
      id: "9",
      name: "Plain console_",
      price: 258200.00,
      image: "/pic10.png",
    },
    {
      id: "10",
      name: "Reclaimed teak Sideboard",
      price: 20000.00,
      image: "/pic9.png",
    },
    {
      id: "11",
      name: "SJP_0825",
      price: 200000.00,
      image: "/pic-16.png",
    },
    {
      id: "12",
      name: "Bella chair and table",
      price: 100000.00,
      image: "/pic15.png",
    },
    {
      id: "13",
      name: "Granite square side table",
      price: 258800.00,
      image: "/side-table.png",
    },
    {
      id: "14",
      name: "Asgaard sofa",
      price: 25000.00,
      image: "/newarrival.png",
    },
    {
      id: "15",
      name: "Maya sofa three seater",
      price: 115000.00,
      image: "/pic11.png",
    },
    {
      id: "16",
      name: "Outdoor sofa set",
      price: 244000.00,
      image: "/pic14.png",
    },
  ]
  console.log(products)

const shop = () => {
  return (
    <>
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
        <h2 className="text-4xl font-extrabold text-gray-800">Shop</h2>
         {/* Breadcrumb */}
           <div className="mt-4 flex items-center space-x-2 text-sm text-black">
             <Link href="/" className="underline underline-offset-2 hover:underline font-bold ">
               Home
             </Link>
             <span>›</span>
             <Link className="hover:underline" href='/about'>Shop</Link>
           </div>
        </div>
        </div>
         {/* Toolbar */}
      <div className="mx-auto max-w-7xl p-4 bg-[#FAF4F4]">
        <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <div className="flex items-center space-x-2 border-l pl-4">
              <Button variant="ghost" size="sm" className="px-2">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="px-2">
                <List className="h-4 w-4" />
              </Button>
            </div>
            <span className="text-sm text-muted-foreground">
             Showing 1-16 of 32 results
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Select defaultValue="16">
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Show" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="16">Show 16</SelectItem>
                <SelectItem value="32">Show 32</SelectItem>
                <SelectItem value="48">Show 48</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="default">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="name-asc">Name: A to Z</SelectItem>
                <SelectItem value="name-desc">Name: Z to A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    {/* Product Grid*/}
    <div className='grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-8'>
                {products.map(( products:Product)=> (
                    <div key={products.id} className='flex flex-col items-center text-center space-y-4'>
                        {/* Product Image */}
                        <Image
                        width={400}
                        height={400} 
                        src={products.image}
                        alt={products.name}
                        className='w-full max-w-xs h-auto object-contain'
                        />
                        {/* Product Name*/}
                        <h3 className='text-lg font-medium text-gray-600'>{products.name}</h3>
                        <p className='text-lg font-semibold text-gray-800'>{products.price}</p>
                        </div>
                ))}
            </div>
             {/* Pagination */}
    <div className="w-full space-y-20 mt-9">
      <div className="flex justify-center gap-2">
        <button
          
             className="h-8 w-8 bg-[#fcf6e8] p-0 text-black hover:bg-[#fdebb3]/90"
        >
          1
        </button>
        <button
          
          className="h-8 w-8 p-0 bg-[#fcf6e8] text-black hover:bg-[#fdebb3]/90"
        >
          2
        </button>
        <button
          
          className="h-8 w-8 p-0 bg-[#fcf6e8] text-black hover:bg-[#fdebb3]/90"
        >
          3
        </button>
        <button
          
          className="px-4 bg-[#fcf6e8] text-black hover:bg-[#fdebb3]/90"
        >
          Next
        </button>
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
    </>
  )  
}

export default shop
