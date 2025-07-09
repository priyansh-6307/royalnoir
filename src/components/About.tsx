import { useState } from 'react';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Background Section */}
      <div id="about" className="  border-t-8 relative w-full h-screen overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src="/royalbg.jpg" // Assuming the image is in public folder
          alt="Background"
        />

        {/* Centered Button */}
        <div className="absolute inset-0 flex justify-center items-center">
          <button
            className=" text-white px-6 py-3 tracking-[0.2rem] bg-black/5 font-semibold gap-5 rounded-3xl text-lg  hover:bg-white hover:text-black transition duration-300"
            onClick={() => setIsOpen(true)}
          >
           ABOUT ROYAL INTERIOR
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-black text-white rounded-lg p-6 max-w-lg w-full shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-white text-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">About Royal Interior</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12 max-w-2xl mx-auto">
          {[
            { number: '1000+', label: 'Projects Completed' },
            { number: '10+', label: 'Years Experience' },
            { number: '800+', label: 'Happy Clients' },
            { number: '2', label: 'braches in NCR'}

            
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center opacity-0 animate-fade-in" 
              style={{ animationDelay: `${index * 0.2 + 0.5}s`, animationFillMode: 'forwards' }}
            >
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-white">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
