"use client";

import Link from "next/link";
import Image from "next/image";

const Cart = () => {
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
        <h2 className="text-4xl font-extrabold text-gray-800">Cart</h2>
         {/* Breadcrumb */}
           <div className="mt-4 flex items-center space-x-2 text-sm text-black">
             <Link href="/" className="underline underline-offset-2 hover:underline font-bold ">
               Home
             </Link>
             <span>›</span>
             <Link className="hover:underline" href='/about'>Cart</Link>
           </div>
        </div>
        </div>
        <div className="min-h-screen flex flex-col bg-gray-50 my-20">
     
      <main className="flex-grow max-w-6xl mx-auto  w-full h-auto my-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
            <table className="w-full border-collapse">
              <thead className="bg-[#fff9e5] border-b">
                <tr>
                  <th className="text-left p-3 text-gray-600 font-medium">
                    Product
                  </th>
                  <th className="text-right p-3 text-gray-600 font-medium">
                    Price
                  </th>
                  <th className="text-center p-3 text-gray-600 font-medium">
                    Quantity
                  </th>
                  <th className="text-right p-3 text-gray-600 font-medium">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 1,
                    image: "/newarrival.png",
                    price: 25000000,
                    quantity: 1,
                    subtotal: 25000000,
                  },
                ].map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-3 text-gray-700"><Image src={item.image} height={100} width={100} alt="" /></td>
                    <td className="p-3 text-right text-gray-700">Rs. {item.price}</td>
                    <td className="p-3 text-center text-gray-700">{item.quantity}</td>
                    <td className="p-3 text-right text-gray-700">
                      Rs. {item.subtotal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Summary */}
          <div className="bg-[#fff9e5] p-6 h-auto rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cart Total
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-700 font-semibold">Subtotal</span>
                <span className="text-gray-800 ">Rs. 25000000</span>
              </div>
              
              <div className="flex justify-between text-lg font-bold ">
                <span className="text-gray-700 font-semibold">Total</span>
                <span className="text-[#B88E2F] text-lg">Rs. 25000000</span>
              </div>
              <button className="w-full  px-4 py-2 bg-[#fff9e5] text-black font-medium rounded-lg shadow hover:bg-white  transition">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
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

       
    </div>
  );
};

export default Cart;

