import React from "react";

const ContactUsSection = () => {
  return (
    <section className="p-8 bg-slate-100 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="col-span-1 bg-gradient-to-br from-orange-600 to-slate-700 text-white p-8 rounded-3xl flex flex-col justify-center items-start space-y-6">
          <h2 className="text-2xl font-bold leading-snug">
            We’re Here To Help —<br className="hidden md:block" />
            <span className="text-orange-200"> Contact Us Today!</span>
          </h2>

          <div className="space-y-4 text-sm text-orange-100">
            <p className="flex items-center gap-2">
              📍 <span>Pollachi, Tamil Nadu</span>
            </p>
            <p className="flex items-center gap-2">
              📞 <span>+91 90921 55212</span>
            </p>
            <p className="flex items-center gap-2">
              ✉️ <span>info@sss-global.com</span>
            </p>
          </div>

          <div className="flex gap-4 pt-2">
            <a href="#" className="hover:text-orange-300 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor"><path
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M18.364 5.636l-1.414 1.414a4 4 0 01-5.657 0l-3.535-3.535a2 2 0 00-2.828 0L4.222 6.222a2 2 0 000 2.828l3.535 3.535a4 4 0 010 5.657l-1.414 1.414" />
              </svg>
            </a>
            <a href="#" className="hover:text-orange-300 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor"><path
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2h-6v-7H9v7H3a2 2 0 01-2-2V10a2 2 0 012-2h2" />
              </svg>
            </a>
            {/* Add more icons as needed */}
          </div>
        </div>


        {/* Form Section */}
        <div className="col-span-2 bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-orange-600 mb-4 leading-tight">
            Join Us and “SSS Global” to <br /> the Best Experience
          </h2>

          <h3 className="text-lg text-gray-600 mb-8">
            Give your seed the benefits of the perfect environment to yield.
          </h3>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border-b border-gray-300 focus:border-orange-600 bg-transparent outline-none py-2 px-1 text-gray-700 transition duration-300"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border-b border-gray-300 focus:border-orange-600 bg-transparent outline-none py-2 px-1 text-gray-700 transition duration-300"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border-b border-gray-300 focus:border-orange-600 bg-transparent outline-none py-2 px-1 text-gray-700 transition duration-300"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="border-b border-gray-300 focus:border-orange-600 bg-transparent outline-none py-2 px-1 text-gray-700 transition duration-300"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="sm:col-span-2 border-b border-gray-300 focus:border-orange-600 bg-transparent outline-none py-2 px-1 text-gray-700 transition duration-300 resize-none"
            ></textarea>
            <button
              type="submit"
              className="sm:col-span-2 bg-orange-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-orange-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
