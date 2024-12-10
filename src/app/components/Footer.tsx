import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-white py-8 border-t border-gray-300'>
        <div className='container mx-auto px-4 md:px-12'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                {/* Adress Section */}
                <div className='text-gray-400 text-sm items-center text-center flex  '>
                    <p> C1 Area Liaquatabad</p>
                    <p> Pakistan</p>
                </div>

                {/* Link Section */}
                <div>
                    <h3 className='text-gray-400 text-sm font-medium mb-3'>Links</h3>
                    <ul className='space-y-4'>
                        <li>
                            <a href='#' className='text-gray-700 hover:text-black transition'>Home</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-700 hover:text-black transition'>Shop</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-700 hover:text-black transition'>About</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-700 hover:text-black transition'>Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Help Section */}
                <div>
                    <h3  className='text-gray-400 text-sm font-medium mb-3'> Help</h3>
                    <ul className='space-y-4'>
                        <li>
                            <a href='#' className='text-gray-700 hover:text-black transition'>Payment Option</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-700 hover:text-black transition'>Returns</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-700 hover:text-black transition'>Privacy Policies</a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div>
                <h3  className='text-gray-400 text-sm h-[24px] w-[86px] font-medium mb-3'>NewsLetter</h3>
                <div className='flex items-center gap-3'>
                    <input
                    type='email'
                    placeholder='Enter Your Email Adress'
                    className='flex-1 px-4 py-2 text-[14px] font-normal border border-gray-300 rounded-md focus:outline-none focus:ring-1 shadow-md focus:ring-black'
                    />
                    <button className='hover:bg-gray-400 font-semibold text-[14px] transition px-4 py-2 shadow-md rounded-md bg-transparent text-black'>SUBSCRIBE</button>
                 </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className='mt-8 text-center font-semibold text-[20px] text-gray-700 text-sm  p-8 w-full items-center'>
                <p>2024 All right reserved </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
