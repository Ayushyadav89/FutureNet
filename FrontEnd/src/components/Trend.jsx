import React from 'react';

function Trend() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
      <div className="flex flex-col md:w-1/2 lg:w-1/3 space-y-4">
        <h1 className="text-3xl md:text-4xl text-white font-bold leading-tight">
          Top trends for the future of work
        </h1>
        <p className="text-lg md:text-xl text-slate-400">
          Our 2025 Global Learning & Skills Trends Report is out now! Find out how to build the skills to keep pace with change.
        </p>
      </div>

      <div className="md:w-1/2 lg:w-2/3">
        <img 
          src="https://cms-images.udemycdn.com/96883mtakkm8/1qvvR0FDKv9chruIpia6Sc/b2af22a0097e47de4e4354237e3f378c/Onsite_Desktop_GLSTR25.png" 
          alt="Global Learning & Skills Trends Report 2025" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default Trend;