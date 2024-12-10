import React from "react";
import Link from "next/link";

const page = () => {
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
        <h2 className="text-4xl font-extrabold text-gray-800">My Account</h2>
         {/* Breadcrumb */}
           <div className="mt-4 flex items-center space-x-2 text-sm text-black">
             <Link href="/" className="underline underline-offset-2 hover:underline font-bold ">
               Home
             </Link>
             <span>›</span>
             <Link className="hover:underline" href='/about'>My Account</Link>
           </div>
        </div>
        </div>
      <div className="flex flex-wrap justify-center items-center gap-8 p-4">
        <div className="flex flex-col w-full max-w-md p-4 bg-white shadow-md rounded-lg ">
          <h1 className="text-2xl text-black font-bold m-10">Log in</h1>
          <div className="flex flex-col mb-4 text-black font-semibold">
            <label htmlFor="">Username or email address</label>
            <input
              className="h-[40px] w-full border-2 px-2 rounded-md"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col mb-4 text-black font-semibold">
            <label htmlFor="">Password</label>
            <input
              className="h-[40px] w-full border-2 px-2 rounded-md"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex items-center mb-4">
            <input className="mr-2" type="checkbox" name="" id="remember-me" />
            <span>Remember me</span>
          </div>
          <div className="flex gap-6 items-center">
            <button className="h-[40px] w-[150px] border-2 rounded-md text-black font-semibold">
              Log In
            </button>
            <span>Lost your password?</span>
          </div>
        </div>

        <div className="flex flex-col m-20">
          <h1 className="text-2xl text-black font-bold">Register</h1>
          <div className="flex flex-col my-4 text-black font-semibold">
            <label htmlFor=""> email address</label>
            <input
              className="h-[40px] w-[250px] border-2 rounded-md"
              type="text"
              name=""
              id=""
            />
          </div>

          <div className="flex flex-col my-4  text-sm w-[300px]">
            <span>
              A link to set a new password will be sent to your email address.
            </span>
            <p className="mt-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
          <div className="flex flex-col my-4">
            <div className="flex gap-6 items-center">
              <button className="h-[40px] w-[150px] border-2 rounded-md text-black font-semibold">
                Register
              </button>
             
            </div>
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
  );
};

export default page;