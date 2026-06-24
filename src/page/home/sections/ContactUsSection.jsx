import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Send } from "lucide-react";
import { MotionSection } from "../../../components/ui/Motion";
import SectionHeading from "../../../components/ui/SectionHeading";
import { showcaseProducts } from "../../../data/homeData";

const ContactUsSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    product: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Valid email required";
    if (!form.country.trim()) newErrors.country = "Country is required";
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

    const phoneIntl = "919965405999";
    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
    const separator = "————————————";
    const messageText = `*Lumicos LLP · Website Enquiry*\n${separator}\n• *Name:* ${form.name}\n• *Email:* ${form.email}\n• *Phone:* ${form.phone || "-"}\n• *Company:* ${form.company || "-"}\n• *Country:* ${form.country}\n• *Product Interest:* ${form.product || "-"}\n\n*Message:*\n${form.message}\n${separator}\nSubmitted: ${submittedAt} IST\n— Sent from lumicos.com`;
    const waUrl = `https://wa.me/${phoneIntl}?text=${encodeURIComponent(messageText)}`;

    try {
      window.open(waUrl, "_blank");
      setStatus("success");
    } catch {
      setStatus("idle");
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-900 outline-none transition-colors text-gray-800 dark:text-gray-100 ${
      errors[field]
        ? "border-red-400"
        : "border-gray-200 dark:border-gray-700 focus:border-primary"
    }`;

  return (
    <MotionSection
      id="contact"
      className="section-padding bg-beige-100 dark:bg-gray-900"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact & Inquiry"
          title="Start Your Coir Export Inquiry"
          subtitle="Tell us about your requirements and our export team will respond with pricing, specifications, and delivery timelines within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-primary text-white">
              <h3 className="font-bold text-xl mb-6">Direct Contact</h3>
              <ul className="space-y-4 text-white/85 text-sm">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-accent shrink-0 mt-0.5" />
                  <a href="tel:+919965405999" className="hover:text-accent">
                    +91 99654 05999
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-accent shrink-0 mt-0.5" />
                  <a href="mailto:gaurav@lumicos.com" className="hover:text-accent">
                    gaurav@lumicos.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>
                    Head Office: 30 Sri MKK Enclave, Marapettai Street, Pollachi
                    642001, Tamil Nadu, India
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>
                    Factory: 139/3B, Chandirapuram Pirivu, Thippampatti (PO),
                    Pollachi 642103, Coimbatore, Tamil Nadu, India
                  </span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/919965405999?text=Hello%20Lumicos%2C%20I%20would%20like%20to%20inquire%20about%20coir%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] text-white font-semibold hover:opacity-90 transition-opacity shadow-premium"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3 bg-white dark:bg-gray-950 rounded-2xl p-6 md:p-8 shadow-premium border border-primary/5">
            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              onSubmit={onSubmit}
              noValidate
            >
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className={inputClass("name")}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1">{errors.name}</span>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  className={inputClass()}
                  placeholder="Your Company Ltd."
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className={inputClass("email")}
                  placeholder="john@company.com"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1">{errors.email}</span>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">
                  Country *
                </label>
                <input
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={onChange}
                  className={inputClass("country")}
                  placeholder="Germany"
                />
                {errors.country && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.country}
                  </span>
                )}
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  className={inputClass()}
                  placeholder="+49 ..."
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">
                  Product Interest
                </label>
                <select
                  name="product"
                  value={form.product}
                  onChange={onChange}
                  className={inputClass()}
                >
                  <option value="">Select a product</option>
                  {showcaseProducts.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">
                  Message *
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  className={`${inputClass("message")} resize-none`}
                  placeholder="Tell us about your order quantity, specifications, and delivery requirements..."
                />
                {errors.message && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="sm:col-span-2 btn-primary disabled:opacity-60"
              >
                {status === "submitting" ? (
                  "Sending..."
                ) : status === "success" ? (
                  "Sent — Opening WhatsApp"
                ) : (
                  <>
                    Submit Inquiry
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default ContactUsSection;
