import { useState } from 'react';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="contact" className="w-full bg-white text-white py-24 relative">
    
{/* Contact Us Button with Rotating Ring */}
<div className="text-center mb-16">
  <div className="relative inline-flex items-center justify-center">
    {/* Colorful Animated Ring (larger than the button) */}
    <div className="absolute z-0 w-[calc(100%+12px)] h-[calc(100%+12px)] rounded-full 
      bg-[conic-gradient(from_0deg,_#facc15,_#f472b6,_#60a5fa,_#34d399,_#facc15)] 
      [background-size:400%_400%] animate-[animate-ring_4s_linear_infinite] p-[4px]">
      <div className="w-full h-full bg-white rounded-full"></div>
    </div>

    {/* Actual Button */}
    <button
      className="relative z-10 bg-white text-black px-6 py-3 rounded-full font-semibold tracking-wide hover:bg-gray-100 transition duration-300"
      onClick={() => setIsOpen(true)}
    >
      Click to Contact Us
    </button>
  </div>
</div>




      {/* Google Maps Embed */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="rounded-lg overflow-hidden shadow-lg aspect-[16/9]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d449632.0275287435!2d77.55957269999999!3d28.3058898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc7407b9049d3%3A0x4fe50d322d1970b9!2sRoyal%20interior!5e0!3m2!1sen!2sin!4v1751595898119!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg max-w-md w-full shadow-xl relative">
            <button
              className="absolute top-2 right-3 text-2xl font-bold text-black"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Contact Royal Interior</h2>
            <div className="space-y-3 text-sm">
              <p>📞 +91 9711976969</p>
              <p>📞 +91 7088914558</p>
              <p>📧 royalinterior.com</p>
              <p>📍galleria market, Gaur Yamuna City, g-32, Greater Noida, Uttar Pradesh 203201 </p>
              <a
                href="https://wa.me/9711976969"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
