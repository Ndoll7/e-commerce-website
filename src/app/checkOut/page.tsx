"use client";


import Link from "next/link";
import React from "react";


const Checkout = () => {
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
        <h2 className="text-4xl font-extrabold text-gray-800">Checkout</h2>
         {/* Breadcrumb */}
           <div className="mt-4 flex items-center space-x-2 text-sm text-black">
             <Link href="/" className="underline underline-offset-2 hover:underline font-bold ">
               Home
             </Link>
             <span>›</span>
             <Link className="hover:underline" href='/about'>Checkout</Link>
           </div>
        </div>
        </div>
<div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow py-4">
      
      </header>
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <form className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shipping Details */}
            <div className="lg:col-span-2 space-y-6 bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Billing Details
              </h2>
              <div className="space-y-4">
                {[
                  { label: "First Name", name: "firstName" },
                  { label: "Last Name", name: "lastName" },
                  { label: "Country Name (Optional)", name: "CountryName"},
                  { label: "Country/Region", name: "country" },
                  { label: "Street Address", name: "streetAddress" },
                  { label: "Town/City", name: "townCity" },
                  { label: "Province", name: "province" },
                  { label: "ZIP Code", name: "zipCode" },
                  { label: "Phone", name: "phone" },
                  { label: "Email", name: "email" },
                  { label: "Additional Information", name: "additionalInfo" },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-black font-semibold mb-1"
                    >
                      {field.label}
                    </label>
                    {field.name === "additionalInfo" ? (
                      <textarea
                        id={field.name}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    ) : (
                      <input
                        type={field.name === "email" ? "email" : "text"}
                        id={field.name}
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary & Payment */}
            <div className=" space-y-6 bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">
                Product
              </h2>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subtotal</h2>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  < span className="text-gray-500">Asgard Sofa x 1</span>
                  <span>Rs.250,000.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs.250,000.00</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-[#B88E2F] text-lg">Rs.250,000.00</span>
                </div>
                <hr />
               
                
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Direct Bank Transfer
                </h3>
                <p className="text-gray-400">Make your payment directly inti our bank account.please use your Order ID payment reference.your order will not be shipped until the fund have cleared in your account</p>
                <div className="space-y-2">
                  {["Direct Bank Transfer","Cash on Delivery" ].map(
                    (method) => (
                      <label
                        key={method}
                        className="flex items-center text-gray-400 space-x-2"
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method}
                          className="h-4 w-4"
                        />
                        <span>{method}</span>
                      </label>
                    )
                  )}
                </div>
                <p className="text-gray-600">Your personal data will be used to support your experience throughout this website,the manage access to your account,and your other purposes described in your <span className="text-black">privacy policy</span></p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="w-full px-4 py-2 bg-transparent text-black font-medium rounded-lg shadow hover:bg-gray-200 transition"
                >
                  Place Order
                </button>
              </div>
            </div>
          </form>
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

export default Checkout;