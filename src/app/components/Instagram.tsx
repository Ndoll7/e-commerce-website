import React from "react";


const Instagram = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-image.png')" }}
    >
      <div className="bg-transparent bg-opacity-80 px-8 py-6 rounded-md shadow-lg text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">Our Instagram</h2>
        <p className="text-gray-600 mt-2">Follow our store on Instagram</p>
        <div className="mt-6">
          <button  className="bg-slate-100 hover:bg-transparent text-gray-700 border rounded-full px-6 py-3 text-[16px] font-bold shadow-lg ">
            Follow Us 
          </button>
        </div>
      </div>
    </section>
  );
};

export default Instagram;