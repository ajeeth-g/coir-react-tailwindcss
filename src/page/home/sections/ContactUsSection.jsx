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
              📍{" "}
              <span>
                {" "}
                Head Office - 30 Sri MKK Enclave, Marapettai Street, Pollachi
                642001, Tamil Nadu, India Factory - 139/3B , Chandirapuram
                Pirivu,Thippampatti (PO), Pollachi - 642103. Coimbatore,Tamil
                Nadu,India.
              </span>
            </p>
            <p className="flex items-center gap-2">
              📍{" "}
              <span>
                Factory - 139/3B , Chandirapuram Pirivu,Thippampatti (PO),
                Pollachi - 642103. Coimbatore,Tamil Nadu,India.
              </span>
            </p>
            <p className="flex items-center gap-2">
              📞 <span>+91 99654 05999</span>
            </p>
            <p className="flex items-center gap-2">
              ✉️ <span>gaurav@lumicos.com</span>
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="col-span-2 bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-orange-600 mb-4 leading-tight">
            Join hands with Lumicos LLP to experience the best.
          </h2>

          <h3 className="text-lg text-gray-600 mb-8">
            Give your seeds the perfect environment to thrive.
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
