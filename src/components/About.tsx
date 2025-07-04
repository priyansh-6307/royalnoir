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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white text-black rounded-lg p-6 max-w-lg w-full shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-black text-xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">About Royal Interior</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              With over 15 years of experience in luxury interior design, we have established ourselves 
              as the premier choice for discerning clients who demand excellence. Our team of skilled 
              designers and craftsmen work tirelessly to transform spaces into works of art. From contemporary 
              minimalism to classic elegance, we specialize in creating bespoke interiors that reflect your 
              personality while maintaining the highest standards of quality and sophistication.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
