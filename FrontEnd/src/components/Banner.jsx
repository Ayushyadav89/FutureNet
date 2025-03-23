import React from 'react'

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto container flex flex-col md:flex-row md:mt-10'>
      {/* Text Section */}
      <div className='w-full md:w-1/2 order-2 md:order-1 mt-12 text-left mr-15'>
        <h1 className='text-white text-3xl font-semibold'>
          Aluminium Unveiled: A Comprehensive 
          <br />Journey from {" "}
          <span className='text-gray-300'>History to Sustainability</span>
        </h1>
        <p className='text-xl text-gray-300 mt-10'>
        Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.
        </p>
        <label className="input input-bordered flex items-center gap-2 mt-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
          </label>

          <button className="btn mt-10 bg-violet-800 text-white hover:text-violet-700 hover:bg-white">Join Now</button>
      </div>
      
      {/* Image Section */}
      <div className='w-full md:w-1/2 order-1 md:order-2 mt-20 md:mt-0 flex justify-center'>
        <img className='rounded-xl' 
          src="https://images.pexels.com/photos/7616700/pexels-photo-7616700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Aluminium" 
        />
      </div>
    </div>
    </>
  )
}

export default Banner
