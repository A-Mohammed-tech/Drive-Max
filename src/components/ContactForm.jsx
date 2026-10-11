import { useEffect, useState } from "react";
import { CheckCircle2, AlertCircle, Info, Loader2, Send } from "lucide-react";
import Button from "./Button";
import FormField, { inputClass } from "./FormField";
import { company, productInterests } from "../data/content";

/**
 * Real submission service, e.g. a Formspree endpoint. Set it in a `.env` file:
 *   VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx
 * While it is empty the form validates but sends NOTHING, and says so.
 */
const ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT || "").trim();

const EMPTY = { name: "", company: "", phone: "", email: "", interest: "", message: "", website: "" };

// Order matches the visual order of the fields (used to focus the first error).
function validate(v) {
  const errors = {};
  if (v.name.trim().length < 2) errors.name = "Enter your full name.";
  if (v.phone.trim() && !/^\+?[\d\s-]{8,15}$/.test(v.phone.trim()))
    errors.phone = "Enter a valid phone number using digits, for example 89765 34120.";
  if (!v.email.trim()) errors.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    errors.email = "Enter a valid email address, like name@example.com.";
  if (!v.interest) errors.interest = "Choose what you are enquiring about.";
  if (v.message.trim().length < 10)
    errors.message = "Write at least 10 characters so we know how to help.";
  return errors;
}

/**
 * `enquiry` is { product, nonce } - set when a visitor clicks "Enquire about this"
 * on a product card, so the product is pre-selected here.
 */
export default function ContactForm({ enquiry }) {
  const [values, setValues] = useState(EMPTY);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  // idle | sending | success | error | not-configured
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (enquiry?.product) {
      setValues((v) => ({ ...v, interest: enquiry.product }));
      setStatus("idle");
    }
  }, [enquiry]);

  const errors = validate(values);
  const showError = (field) => ((touched[field] || submitted) && errors[field]) || undefined;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (status !== "idle" && status !== "sending") setStatus("idle");
  };

  const handleBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const firstInvalid = Object.keys(errors)[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    // Hidden spam trap: real visitors never fill this in.
    if (values.website) return;

    if (!ENDPOINT) {
      setStatus("not-configured");
      return;
    }

    setStatus("sending");
    try {
      const { website, ...payload } = values; // eslint-disable-line no-unused-vars
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setStatus("success");
      setValues(EMPTY);
      setTouched({});
      setSubmitted(false);
    } catch {
      setStatus("error");
    }
  };

  const describe = (field) => (showError(field) ? `${field}-error` : undefined);

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h3 className="font-display text-2xl font-extrabold text-brand-navy">Send an enquiry</h3>
      <p className="mt-2 text-slate-600">Tell us what you need and how to reach you.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <FormField id="name" label="Full name" required error={showError("name")}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(showError("name"))}
            aria-describedby={describe("name")}
            className={inputClass(showError("name"))}
          />
        </FormField>

        <FormField id="company" label="Company">
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={handleChange}
            onBlur={handleBlur}
            className={inputClass(false)}
          />
        </FormField>

        <FormField id="phone" label="Phone" error={showError("phone")}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(showError("phone"))}
            aria-describedby={describe("phone")}
            className={inputClass(showError("phone"))}
          />
        </FormField>

        <FormField id="email" label="Email" required error={showError("email")}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(showError("email"))}
            aria-describedby={describe("email")}
            className={inputClass(showError("email"))}
          />
        </FormField>

        <div className="sm:col-span-2">
          <FormField id="interest" label="I am enquiring about" required error={showError("interest")}>
            <select
              id="interest"
              name="interest"
              value={values.interest}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(showError("interest"))}
              aria-describedby={describe("interest")}
              className={inputClass(showError("interest"))}
            >
              <option value="">Select a product</option>
              {productInterests.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <div className="sm:col-span-2">
          <FormField id="message" label="Message" required error={showError("message")}>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(showError("message"))}
              aria-describedby={describe("message")}
              className={inputClass(showError("message"))}
            />
          </FormField>
        </div>

        {/* Hidden spam trap */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          icon={status === "sending" ? undefined : Send}
          disabled={status === "sending"}
          className="w-full sm:w-auto"
        >
          {status === "sending" ? (
            <>
              <Loader2 size={18} aria-hidden="true" className="animate-spin" />
              Sending
            </>
          ) : (
            "Send enquiry"
          )}
        </Button>
      </div>

      <div aria-live="polite" className="mt-5 empty:hidden">
        {status === "not-configured" && (
          <div className="flex gap-3 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
            <Info size={20} aria-hidden="true" className="mt-0.5 shrink-0" />
            <p>
              <strong>Your message was not sent.</strong> This website is not connected to a
              messaging service yet. Please call us on{" "}
              <a className="font-semibold underline" href={company.landline.href}>
                {company.landline.display}
              </a>{" "}
              or{" "}
              <a className="font-semibold underline" href={company.mobile.href}>
                {company.mobile.display}
              </a>
              .
            </p>
          </div>
        )}
        {status === "success" && (
          <div className="flex gap-3 rounded-md border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-900">
            <CheckCircle2 size={20} aria-hidden="true" className="mt-0.5 shrink-0" />
            <p>
              <strong>Enquiry sent.</strong> Thank you. We will get back to you using the details you
              gave.
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="flex gap-3 rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-900">
            <AlertCircle size={20} aria-hidden="true" className="mt-0.5 shrink-0" />
            <p>
              <strong>Your enquiry could not be sent.</strong> Check your connection and try again,
              or call us on{" "}
              <a className="font-semibold underline" href={company.landline.href}>
                {company.landline.display}
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
