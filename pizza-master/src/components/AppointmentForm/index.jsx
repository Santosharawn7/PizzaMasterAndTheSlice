import { useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

/* ------------ validation schema ------------ */
const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z
    .string()
    .min(7, "Enter a valid phone")
    .max(20, "Phone seems too long"),
  email: z.string().email("Enter a valid email"),
  day: z.string().min(1, "Select a day"),
  month: z.string().min(1, "Select a month"),
  year: z.string().min(1, "Select a year"),
  services: z
    .array(z.enum(["Catering", "Consulting", "Pop Up", "Masterclass", "Brand Collaborations"]))
    .min(1, "Pick at least one"),
  message: z.string().min(10, "Tell us a bit more (10+ chars)"),
  // honeypot
  company: z.string().optional(), // should remain empty
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please accept the terms" }),
  }),
});

const SERVICES = [
  "Catering",
  "Consulting",
  "Pop Up",
  "Masterclass",
  "Brand Collaborations",
];

export default function AppointmentForm() {
  const [status, setStatus] = useState({ type: "", msg: "" });

  // build dropdowns similar to the reference site
  const days = useMemo(() => Array.from({ length: 31 }, (_, i) => String(i + 1)), []);
  const months = useMemo(
    () => [
      "01","02","03","04","05","06","07","08","09","10","11","12"
    ],
    []
  );
  const years = useMemo(() => {
    const now = new Date().getFullYear();
    // allow current year and next 2 (tweak as you like)
    return Array.from({ length: 3 }, (_, i) => String(now + i));
  }, []);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      day: "",
      month: "",
      year: "",
      services: [],
      message: "",
      company: "", // honeypot
      consent: false,
    },
  });

  const onSubmit = async (values) => {
    // spam guard: if the honeypot has content, silently pass
    if (values.company && values.company.trim().length > 0) {
      setStatus({ type: "error", msg: "Bot submission blocked." });
      return;
    }
    setStatus({ type: "", msg: "" });

    // 1) Compose a friendly date string
    const dateStr = `${values.year}-${values.month}-${values.day}`;

    // 2) Prepare EmailJS payload
    const templateParams = {
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      email: values.email,
      date: dateStr,
      services: values.services.join(", "),
      message: values.message,
      submitted_at: new Date().toISOString(),
    };

    try {
      // replace these with your own IDs from EmailJS (see step 3)
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus({ type: "success", msg: "Thanks! Your enquiry has been sent." });
      reset();
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        msg: "Sorry, something went wrong sending your enquiry. Please try again.",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg shadow-lg border border-gray-200 p-8"
        noValidate
      >
        <h2 className="text-3xl font-bold text-woodbrown-800 mb-8 text-center">
          Enquire Now
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              First Name *
            </label>
            <input 
              {...register("firstName")} 
              placeholder="Jane"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-woodbrown-500 focus:border-transparent"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name *
            </label>
            <input 
              {...register("lastName")} 
              placeholder="Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-woodbrown-500 focus:border-transparent"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input 
              {...register("phone")} 
              placeholder="+1 416 555 0123"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-woodbrown-500 focus:border-transparent"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input 
              type="email" 
              {...register("email")} 
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-woodbrown-500 focus:border-transparent"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Preferred Date *
          </label>
          <div className="flex gap-4">
            <select 
              {...register("day")}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-woodbrown-500 focus:border-transparent"
            >
              <option value="">Day</option>
              {days.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <select 
              {...register("month")}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-woodbrown-500 focus:border-transparent"
            >
              <option value="">Month</option>
              {months.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <select 
              {...register("year")}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-woodbrown-500 focus:border-transparent"
            >
              <option value="">Year</option>
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          {(errors.day || errors.month || errors.year) && (
            <p className="text-red-500 text-sm mt-1">Please select a complete date</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            I'm interested in *
          </label>
          <Controller
            control={control}
            name="services"
            render={({ field: { value, onChange } }) => (
              <div className="flex flex-wrap gap-4">
                {SERVICES.map((s) => {
                  const checked = value?.includes(s);
                  return (
                    <label key={s} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={!!checked}
                        onChange={(e) => {
                          if (e.target.checked) onChange([...(value ?? []), s]);
                          else onChange((value ?? []).filter((v) => v !== s));
                        }}
                        className="w-4 h-4 text-woodbrown-600 border-gray-300 rounded focus:ring-woodbrown-500"
                      />
                      <span className="text-gray-700">{s}</span>
                    </label>
                  );
                })}
              </div>
            )}
          />
          {errors.services && (
            <p className="text-red-500 text-sm mt-1">{errors.services.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            rows={5}
            {...register("message")}
            placeholder="Tell us about your event, guests, dietary needs, location..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-woodbrown-500 focus:border-transparent"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Honeypot (hidden from humans) */}
        <div className="absolute left-[-9999px]">
          <label>
            Company
            <input {...register("company")} autoComplete="off" tabIndex={-1} />
          </label>
        </div>

        <div className="mb-6">
          <label className="flex items-center gap-3">
            <input 
              type="checkbox" 
              {...register("consent")}
              className="w-4 h-4 text-woodbrown-600 border-gray-300 rounded focus:ring-woodbrown-500"
            />
            <span className="text-gray-700">
              I agree to be contacted about my enquiry. *
            </span>
          </label>
          {errors.consent && (
            <p className="text-red-500 text-sm mt-1">{errors.consent.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-woodbrown-600 hover:bg-woodbrown-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200"
        >
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </button>

        {status.msg && (
          <div
            className={`mt-4 p-4 rounded-lg ${
              status.type === "success" 
                ? "bg-green-50 border border-green-200 text-green-800" 
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
          >
            {status.msg}
          </div>
        )}
      </form>
    </div>
  );
}
