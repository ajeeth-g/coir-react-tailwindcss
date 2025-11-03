import React, { useState } from "react";

const ContactUsSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Valid email required";
    if (!/^\+?[0-9\s-]{7,15}$/.test(form.phone)) newErrors.phone = "Valid phone required";
    if (!form.message.trim()) newErrors.message = "Please enter a message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // Build WhatsApp message and open WhatsApp chat
    const phoneIntl = "919965405999"; // Home section target
    const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const separator = "————————————";
    const messageText = `*Lumicos LLP · Website Enquiry*\n${separator}\n• *Name:* ${form.name}\n• *Email:* ${form.email}\n• *Phone:* ${form.phone}\n• *Company:* ${form.company || "-"}\n\n*Message:*\n${form.message}\n${separator}\nSubmitted: ${submittedAt} IST\nPage: Home Contact Section\n— Sent from lumicos.com`;
    const waUrl = `https://wa.me/${phoneIntl}?text=${encodeURIComponent(messageText)}`;
    try {
      window.open(waUrl, "_blank");
      setStatus("success");
    } catch (_) {
      setStatus("idle");
    }
  };

  return (
    <section className="p-4 sm:p-8 bg-slate-100 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-x-8 gap-y-4">
        {/* Left Section */}
        <div className="col-span-1 bg-gradient-to-br from-orange-600 to-slate-700 text-white p-8 rounded-3xl flex flex-col justify-center items-start space-y-6">
          <h2 className="text-2xl font-bold leading-snug">
            We’re Here To Help —<br className="hidden md:block" />
            <span className="text-orange-200"> Contact Us Today!</span>
          </h2>

          <div className="space-y-4 text-sm text-orange-100">
            <p className="flex items-center gap-2">
              📞 <span>+91 99654 05999</span>
            </p>
            <p className="flex items-center gap-2">
              ✉️ <span>gaurav@lumicos.com</span>
            </p>
            <p className="flex items-center gap-2">
              📍{" "}
              <span>
                {" "}
                Head Office - 30 Sri MKK Enclave, Marapettai Street, Pollachi
                642001, Tamil Nadu, India.
              </span>
            </p>
            <p className="flex items-center gap-2">
              📍{" "}
              <span>
                Factory - 139/3B , Chandirapuram Pirivu,Thippampatti (PO),
                Pollachi - 642103. Coimbatore,Tamil Nadu,India.
              </span>
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="col-span-2 bg-white p-4 sm:p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-orange-600 mb-4 leading-tight">
            Join hands with Lumicos LLP to experience the best.
          </h2>

          <h3 className="text-lg text-gray-600 mb-8">
            Give your seeds the perfect environment to thrive.
          </h3>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={onSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={onChange}
              className={`border-b bg-transparent outline-none py-2 px-1 text-gray-700 transition duration-300 ${errors.name ? "border-red-500" : "border-gray-300 focus:border-orange-600"}`}
            />
            {errors.name && <span className="text-red-600 text-sm">{errors.name}</span>}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={onChange}
              className={`border-b bg-transparent outline-none py-2 px-1 text-gray-700 transition duration-300 ${errors.email ? "border-red-500" : "border-gray-300 focus:border-orange-600"}`}
            />
            {errors.email && <span className="text-red-600 text-sm">{errors.email}</span>}
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={onChange}
              className={`border-b bg-transparent outline-none py-2 px-1 text-gray-700 transition duration-300 ${errors.phone ? "border-red-500" : "border-gray-300 focus:border-orange-600"}`}
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={onChange}
              className="border-b border-gray-300 focus:border-orange-600 bg-transparent outline-none py-2 px-1 text-gray-700 transition duration-300"
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={onChange}
              className={`sm:col-span-2 border-b bg-transparent outline-none py-2 px-1 text-gray-700 transition duration-300 resize-none ${errors.message ? "border-red-500" : "border-gray-300 focus:border-orange-600"}`}
            ></textarea>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="sm:col-span-2 bg-orange-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-orange-700 transition duration-300 disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting..." : status === "success" ? "Submitted ✅" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
