import React from 'react'

function Header() {
  
  return (
    <>
    <div className='flex flex-row justify-between mt-2'>
        <div className='text-2xl text-white font-bold'><a href='#'>Read<span className='text-green-500 hover:text-white'>Net</span></a></div>

        <div className='flex justify-center space-x-6'>
          {/*Desktop View */}
          <div class="py-4 hidden md:block">
            <ul class="flex justify-center space-x-6">
              <li class="text-lg font-semibold text-white hover:text-green-400 cursor-pointer">Home</li>
              <li class="text-lg font-semibold text-white hover:text-green-400 cursor-pointer">Course</li>
              <li class="text-lg font-semibold text-white hover:text-green-400 cursor-pointer">Contact</li>
              <li class="text-lg font-semibold text-white hover:text-green-400 cursor-pointer">About</li>
            </ul>
          </div>

          {/* Seach Bar*/}
          <div className='hidden md:block mx-9 mt-2'>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow font-bold text-[2/3] text-black" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-9 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
          </div>

          <div className='hidden md:block border-2 bg-green-500 rounded-2xl items-center text-xl font-bold px-3 py-3 text-white hover:text-green-500 hover:bg-white'><a href='#'>Login</a></div>
          
        </div>


        {/*Mobile View */}
        
      </div>
    </>
  )
}

export default Header
