import { useState } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Globe2,
  Package,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import SEOHead from "../components/seo/SEOHead";
import SectionHeading from "../components/ui/SectionHeading";
import { MotionSection } from "../components/ui/Motion";
import { getPageMeta } from "../seo/pageMeta";
import {
  organizationSchema,
  localBusinessSchema,
  contactPageSchema,
  breadcrumbSchema,
} from "../seo/schemas";
import { NAP, SITE } from "../seo/siteConfig";
import { showcaseProducts } from "../data/homeData";
import contactHero from "../assets/Home_2.jpg";

const pageMeta = getPageMeta("contact");

const trustPoints = [
  {
    icon: Clock,
    title: "24–48 Hour Response",
    text: "Export team replies with pricing, MOQ, and lead times.",
  },
  {
    icon: Globe2,
    title: "40+ Export Countries",
    text: "FOB Chennai/Tuticorin with full export documentation.",
  },
  {
    icon: Package,
    title: "Bulk B2B Orders",
    text: "Container loads, custom specs, and private label options.",
  },
];

const Contact = () => {
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
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.country.trim()) e.country = "Country is required";
    if (!form.message.trim()) e.message = "Please enter a message";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const separator = "————————————";
    const messageText = `*Lumicos LLP · Website Enquiry*\n${separator}\n• *Name:* ${form.name}\n• *Email:* ${form.email}\n• *Phone:* ${form.phone || "-"}\n• *Company:* ${form.company || "-"}\n• *Country:* ${form.country}\n• *Product Interest:* ${form.product || "-"}\n\n*Message:*\n${form.message}\n${separator}\nSubmitted: ${submittedAt} IST\nPage: Contact Page\n— Sent from lumicos.com`;
    const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(messageText)}`;

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
        : "border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary/20"
    }`;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: null },
  ];

  return (
    <>
      <SEOHead
        title={pageMeta.title}
        description={pageMeta.description}
        keywords={pageMeta.keywords}
        canonical={pageMeta.canonical}
        jsonLd={[
          organizationSchema(),
          localBusinessSchema(),
          contactPageSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact-us" },
          ]),
        ]}
      />

      <div className="space-y-12 md:space-y-16">
        <Breadcrumb
          items={breadcrumbItems}
          title="Contact Us"
          bgImage={contactHero}
          subtitle="Request a quote for coco peat, coir fiber, grow bags & export orders from Pollachi, India."
        />

        <MotionSection>
          <SectionHeading
            eyebrow="Export Enquiry"
            title="Start Your Coir Export Inquiry"
            subtitle="Tell us your product requirements, destination port, and quantity. Our B2B export team will respond within 24–48 business hours."
          />

          <div className="grid sm:grid-cols-3 gap-4 mb-10 -mt-4">
            {trustPoints.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-primary/5 shadow-premium text-center sm:text-left"
              >
                <div className="w-10 h-10 mx-auto sm:mx-0 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-primary" />
                </div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary via-primary-700 to-primary-900 text-white shadow-premium-lg">
                <h2 className="font-bold text-xl mb-6">Direct Contact</h2>
                <ul className="space-y-5 text-white/85 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Phone</p>
                      <a href={`tel:${SITE.phone}`} className="hover:text-accent transition-colors">
                        {NAP.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Email</p>
                      <a href={`mailto:${NAP.email}`} className="hover:text-accent transition-colors break-all">
                        {NAP.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Head Office</p>
                      <address className="not-italic leading-relaxed">
                        30 Sri MKK Enclave, Marapettai Street, Pollachi 642001, Tamil Nadu, India
                      </address>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">Factory</p>
                      <address className="not-italic leading-relaxed">
                        139/3B, Chandirapuram Pirivu, Thippampatti (PO), Pollachi 642103, Coimbatore, Tamil Nadu, India
                      </address>
                    </div>
                  </li>
                </ul>
              </div>

              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hello Lumicos, I would like to inquire about coir products for export.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] text-white font-semibold hover:opacity-90 transition-opacity shadow-premium"
              >
                <MessageCircle size={22} />
                Chat on WhatsApp
              </a>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center lg:text-left px-1">
                Business hours: Mon–Sat, 9:00 AM – 6:00 PM IST
              </p>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white dark:bg-gray-950 rounded-2xl p-6 md:p-8 shadow-premium border border-primary/5">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Request a Quote
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Submissions open WhatsApp with your enquiry pre-filled for a faster response.
              </p>

              <form className="grid grid-cols-1 sm:grid-cols-2 gap-5" onSubmit={onSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className={inputClass("name")}
                    placeholder="John Smith"
                    autoComplete="name"
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    className={inputClass()}
                    placeholder="Your Company Ltd."
                    autoComplete="organization"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className={inputClass("email")}
                    placeholder="john@company.com"
                    autoComplete="email"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                </div>

                <div>
                  <label htmlFor="country" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">
                    Country *
                  </label>
                  <input
                    id="country"
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={onChange}
                    className={inputClass("country")}
                    placeholder="Germany"
                    autoComplete="country-name"
                  />
                  {errors.country && <span className="text-red-500 text-xs mt-1 block">{errors.country}</span>}
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className={inputClass()}
                    placeholder="+49 ..."
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <label htmlFor="product" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">
                    Product Interest
                  </label>
                  <select
                    id="product"
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
                    <option value="Custom / Other">Custom / Other</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    className={`${inputClass("message")} resize-none`}
                    placeholder="Quantity, specifications, EC/moisture requirements, destination port..."
                  />
                  {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message}</span>}
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
        </MotionSection>
      </div>
    </>
  );
};

export default Contact;
