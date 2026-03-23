import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  inquiry: string;
  message: string;
};

const INQUIRY_OPTIONS = [
  "Book a Site Viewing",
  "Photography Enquiry",
  "Investment / Partnership",
  "General Information",
  "Press & Media",
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `EarthPod Enquiry — ${form.inquiry || "General"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "—"}\nEnquiry Type: ${form.inquiry}\n\nMessage:\n${form.message}`
    );
    window.open(
      `mailto:getintouch@ecopodbunker.co.za?subject=${subject}&body=${body}`,
      "_blank"
    );
    setSubmitted(true);
  };

  const fieldClass =
    "w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-earth-olive transition-colors duration-200 rounded-none";
  const labelClass =
    "block text-xs font-mono tracking-widest uppercase text-muted-foreground mb-2";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-6 py-12">
        <CheckCircle className="w-12 h-12 text-earth-olive" strokeWidth={1} />
        <div>
          <h3 className="font-serif text-2xl text-foreground mb-2">Message Sent</h3>
          <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
            Your email client should have opened with your enquiry. We'll respond within 48 hours.
          </p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", inquiry: "", message: "" }); }}
          className="text-xs font-mono tracking-widest uppercase text-earth-olive hover:text-foreground transition-colors underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Phone (optional)</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+27 ..."
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass}>Enquiry Type *</label>
          <select
            name="inquiry"
            required
            value={form.inquiry}
            onChange={handleChange}
            className={fieldClass}
          >
            <option value="">Select...</option>
            {INQUIRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about yourself and what you're looking for..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-earth-deep text-white px-10 py-4 font-sans text-xs tracking-widest uppercase hover:bg-earth-olive transition-colors duration-300 group"
      >
        <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        Send Enquiry
      </button>

      <p className="text-xs text-muted-foreground/60">
        * Required fields. Submitting opens your email app with your message pre-filled.
      </p>
    </form>
  );
}
