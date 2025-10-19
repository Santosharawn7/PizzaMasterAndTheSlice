import { useMemo, useState, useEffect } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

/* ------------ phone helpers ------------ */
const isValidAustralianPhone = (value) => {
  if (!value) return false;
  const compact = String(value).replace(/[^0-9+]/g, "");
  const auMobile = /^(?:\+?61|0)4\d{8}$/;
  const auLandline = /^(?:\+?61|0)(?:2|3|7|8)\d{8}$/;
  return auMobile.test(compact) || auLandline.test(compact);
};

const normalizeAustralianPhone = (value) => {
  if (!value) return "";
  const compact = String(value).replace(/[^0-9+]/g, "");
  if (/^\+61\d{9}$/.test(compact)) return compact;
  if (/^0\d{9}$/.test(compact) || /^0\d{9,10}$/.test(compact)) {
    return "+61" + compact.slice(1);
  }
  if (/^61\d{9}$/.test(compact)) return "+" + compact;
  return compact;
};

const formatAustralianForDisplay = (value) => {
  if (!value) return "";
  const digits = String(value).replace(/\D/g, "");

  if (value.startsWith("+61")) {
    const rest = digits.slice(2);
    if (rest.startsWith("4")) {
      const a = rest.slice(0, 1);
      const b = rest.slice(1, 4);
      const c = rest.slice(4, 7);
      const d = rest.slice(7, 10);
      return ["+61", a, b, c, d].filter(Boolean).join(" ").trim();
    }
    const a = rest.slice(0, 1);
    const b = rest.slice(1, 5);
    const c = rest.slice(5, 9);
    return ["+61", a, b, c].filter(Boolean).join(" ").trim();
  }

  if (digits.startsWith("04")) {
    const a = digits.slice(0, 4);
    const b = digits.slice(4, 7);
    const c = digits.slice(7, 10);
    return [a, b, c].filter(Boolean).join(" ").trim();
  }
  if (/^0[2378]/.test(digits)) {
    const a = digits.slice(0, 2);
    const b = digits.slice(2, 6);
    const c = digits.slice(6, 10);
    return [a, b, c].filter(Boolean).join(" ").trim();
  }

  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return digits.slice(0, 3) + " " + digits.slice(3);
  return (
    digits.slice(0, 3) + " " + digits.slice(3, 6) + " " + digits.slice(6, 10)
  );
};

const SERVICES = ["Catering", "Consulting", "Brand Collaborations"];

export default function AppointmentDrawer({ isOpen, onClose }) {
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    day: "",
    month: "",
    year: "",
    time: "",
    package: "",
    services: [],
    message: "",
    company: "",
    consent: false,
  });

  const days = useMemo(
    () => Array.from({ length: 31 }, (_, i) => String(i + 1)),
    []
  );
  const months = useMemo(
    () => [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ],
    []
  );
  const years = useMemo(() => {
    const now = new Date().getFullYear();
    return Array.from({ length: 3 }, (_, i) => String(now + i));
  }, []);

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        return value.trim() ? "" : "First name is required";
      case "lastName":
        return value.trim() ? "" : "Last name is required";
      case "phone":
        return isValidAustralianPhone(value)
          ? ""
          : "Enter a valid Australian phone number";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Enter a valid email";
      case "day":
        return value ? "" : "Select a day";
      case "month":
        return value ? "" : "Select a month";
      case "year":
        return value ? "" : "Select a year";
      case "time":
        return value ? "" : "Select a time";
      case "package":
        return value ? "" : "Select a package";
      case "services":
        return value.length > 0 ? "" : "Pick at least one";
      case "message":
        return value.length >= 10 ? "" : "Tell us a bit more (10+ chars)";
      case "consent":
        return value ? "" : "Please accept the terms";
      default:
        return "";
    }
  };

  const validateDateTime = () => {
    if (formData.day && formData.month && formData.year && formData.time) {
      const selectedDate = new Date(
        parseInt(formData.year),
        parseInt(formData.month) - 1,
        parseInt(formData.day)
      );
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        return { day: "Please select a future date" };
      }

      if (selectedDate.getTime() === today.getTime()) {
        const [hours, minutes] = formData.time.split(":").map(Number);
        const selectedTime = new Date(
          parseInt(formData.year),
          parseInt(formData.month) - 1,
          parseInt(formData.day),
          hours,
          minutes
        );
        const now = new Date();
        if (selectedTime <= now) {
          return { time: "Please select a future time" };
        }
      }
    }
    return {};
  };

  useEffect(() => {
    const dateTimeErrors = validateDateTime();
    setErrors((prev) => ({
      ...prev,
      ...dateTimeErrors,
    }));

    if (Object.keys(dateTimeErrors).length === 0) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.day;
        delete newErrors.time;
        return newErrors;
      });
    }
  }, [formData.day, formData.month, formData.year, formData.time]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    if (touched[name]) {
      const error = validateField(name, newValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handlePhoneChange = (e) => {
    const raw = e.target.value;
    const cleaned = raw.replace(/(?!^)[^0-9]/g, "").replace(/^([^+0-9])+/g, "");
    const withPlus = raw.trim().startsWith("+")
      ? "+" + cleaned.replace(/^\+/, "")
      : cleaned;

    setFormData((prev) => ({ ...prev, phone: withPlus }));

    if (touched.phone) {
      const error = validateField("phone", withPlus);
      setErrors((prev) => ({ ...prev, phone: error }));
    }
  };

  const handleServiceChange = (service) => {
    const newServices = formData.services.includes(service)
      ? formData.services.filter((s) => s !== service)
      : [...formData.services, service];

    setFormData((prev) => ({ ...prev, services: newServices }));

    if (touched.services) {
      const error = validateField("services", newServices);
      setErrors((prev) => ({ ...prev, services: error }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "company") {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    const dateTimeErrors = validateDateTime();
    Object.assign(newErrors, dateTimeErrors);

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.company && formData.company.trim().length > 0) {
      setStatus({ type: "error", msg: "Bot submission blocked." });
      return;
    }

    const newErrors = validateAll();
    setErrors(newErrors);
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    if (Object.keys(newErrors).some((key) => newErrors[key])) {
      setStatus({ type: "error", msg: "Please fix the errors above." });
      return;
    }

    setStatus({ type: "", msg: "" });
    setIsSubmitting(true);

    try {
      // Prepare EmailJS payload
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: normalizeAustralianPhone(formData.phone),
        email: formData.email,
        date: `${formData.year}-${formData.month}-${formData.day}`,
        time: formData.time,
        package: formData.package,
        services: formData.services.join(", "),
        message: formData.message,
        submitted_at: new Date().toISOString(),
      };

      // Get EmailJS configuration from environment variables
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const AUTO_REPLY_TEMPLATE_ID = import.meta.env
        .VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Debug: Log the configuration (remove in production)
      console.log("EmailJS Config:", {
        SERVICE_ID: SERVICE_ID ? "✓ Set" : "✗ Missing",
        TEMPLATE_ID: TEMPLATE_ID ? "✓ Set" : "✗ Missing",
        AUTO_REPLY_TEMPLATE_ID: AUTO_REPLY_TEMPLATE_ID ? "✓ Set" : "✗ Missing",
        PUBLIC_KEY: PUBLIC_KEY ? "✓ Set" : "✗ Missing",
      });

      // Check if EmailJS is configured
      if (
        !SERVICE_ID ||
        !TEMPLATE_ID ||
        !AUTO_REPLY_TEMPLATE_ID ||
        !PUBLIC_KEY
      ) {
        throw new Error(
          "EmailJS configuration missing. Please check your environment variables."
        );
      }

      // Debug: Log template parameters
      console.log("Sending emails with parameters:", templateParams);

      // Send notification email to business owner
      console.log("Sending notification email to business...");
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log("Notification email sent successfully!");

      // Send auto-reply email to customer
      console.log("Sending auto-reply email to customer...");
      await emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      console.log("Auto-reply email sent successfully!");

      console.log("All emails sent successfully!");

      setStatus({
        type: "success",
        msg: "Thanks! Your enquiry has been sent. Check your email for confirmation.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        day: "",
        month: "",
        year: "",
        time: "",
        package: "",
        services: [],
        message: "",
        company: "",
        consent: false,
      });
      setErrors({});
      setTouched({});

      setTimeout(() => {
        onClose();
        setStatus({ type: "", msg: "" });
      }, 2000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus({
        type: "error",
        msg:
          err.message ||
          "Sorry, something went wrong sending your enquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[600px] lg:w-[700px] bg-stone-100 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-amber-900 hover:text-amber-950 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Form Content */}
        <div className="p-8 pt-20">
          <div>
            <h2 className="text-4xl font-bold text-amber-900 mb-8 text-center">
              Enquire Now
            </h2>

            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-amber-900 mb-2">
                    First Name *
                  </label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Jane"
                    className="w-full px-4 py-3 bg-white border-2 border-yellow-600 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-700 transition-all"
                  />
                  {errors.firstName && touched.firstName && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-amber-900 mb-2">
                    Last Name *
                  </label>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Doe"
                    className="w-full px-4 py-3 bg-white border-2 border-yellow-600 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-700 transition-all"
                  />
                  {errors.lastName && touched.lastName && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-amber-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    value={formatAustralianForDisplay(formData.phone)}
                    onChange={handlePhoneChange}
                    onBlur={handleBlur}
                    name="phone"
                    placeholder="+61 4xx xxx xxx"
                    className="w-full px-4 py-3 bg-white border-2 border-yellow-600 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-700 transition-all"
                  />
                  {errors.phone && touched.phone && (
                    <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-amber-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white border-2 border-yellow-600 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-700 transition-all"
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Date Fields */}
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  Preferred Date *
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <select
                    name="day"
                    value={formData.day}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="px-4 py-3 bg-white border-2 border-yellow-600 rounded-lg text-gray-900 focus:outline-none focus:border-yellow-700 transition-all appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 0.5rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.5em 1.5em",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <option value="">Day</option>
                    {days.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <select
                    name="month"
                    value={formData.month}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="px-4 py-3 bg-white border-2 border-yellow-600 rounded-lg text-gray-900 focus:outline-none focus:border-yellow-700 transition-all appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 0.5rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.5em 1.5em",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <option value="">Month</option>
                    {months.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="px-4 py-3 bg-white border-2 border-yellow-600 rounded-lg text-gray-900 focus:outline-none focus:border-yellow-700 transition-all appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: "right 0.5rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.5em 1.5em",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <option value="">Year</option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
                {(errors.day || errors.month || errors.year) &&
                  (touched.day || touched.month || touched.year) && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.day || "Please select a valid date"}
                    </p>
                  )}
              </div>

              {/* Time Field */}
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-4 py-3 bg-white border-2 border-yellow-600 rounded-lg text-black focus:outline-none focus:border-yellow-700 transition-all"
                  min="09:00"
                  max="18:00"
                />
                {errors.time && touched.time && (
                  <p className="text-red-600 text-sm mt-1">{errors.time}</p>
                )}
              </div>

              {/* Package Selection */}
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  Packages *
                </label>
                <select
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-4 py-3 bg-white border-2 border-yellow-600 rounded-lg text-black focus:outline-none focus:border-yellow-700 transition-all appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                    paddingRight: "2.5rem",
                  }}
                >
                  <option value="">Select a package</option>
                  <option value="Classic">Classic</option>
                  <option value="Supreme">Supreme</option>
                  <option value="Deluxe">Deluxe</option>
                </select>
                {errors.package && touched.package && (
                  <p className="text-red-600 text-sm mt-1">{errors.package}</p>
                )}
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  I'm interested in *
                </label>
                <div className="space-y-3">
                  {SERVICES.map((s) => {
                    const checked = formData.services.includes(s);
                    return (
                      <label
                        key={s}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handleServiceChange(s)}
                          className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-0"
                        />
                        <span className="text-gray-700">{s}</span>
                      </label>
                    );
                  })}
                </div>
                {errors.services && touched.services && (
                  <p className="text-red-600 text-sm mt-1">{errors.services}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-amber-900 mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about your event, guests, dietary needs, location..."
                  className="w-full px-4 py-3 bg-white border-2 border-yellow-600 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-yellow-700 transition-all resize-none"
                />
                {errors.message && touched.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Honeypot */}
              <div className="absolute left-[-9999px]">
                <label>
                  Company
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </label>
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-4 h-4 mt-1 text-yellow-600 border-gray-300 rounded focus:ring-0"
                  />
                  <span className="text-gray-700 text-sm">
                    I agree to be contacted about my enquiry. *
                  </span>
                </label>
                {errors.consent && touched.consent && (
                  <p className="text-red-600 text-sm mt-1">{errors.consent}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-amber-700 hover:bg-amber-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </button>

              {/* Status Message */}
              {status.msg && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-100 border border-green-400 text-green-800"
                      : "bg-red-100 border border-red-400 text-red-800"
                  }`}
                >
                  {status.msg}
                </div>
              )}

              <div className="text-gray-700 text-lg font-bold text-center mb-4">
                If you want to do further enquiries, please contact us at
                messenger.
              </div>

              {/* Messenger Button - Centered */}
              <div className="flex justify-center">
                <a
                  href="https://m.me/774891612364601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/512px-Facebook_Messenger_logo_2020.svg.png?20220118041828"
                    alt="Messenger"
                    className="w-6 h-6"
                  />
                  <span>Chat with us on Messenger</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
