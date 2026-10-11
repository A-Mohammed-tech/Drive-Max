import { AlertCircle } from "lucide-react";

/** Shared input styling; red border when the field has an error. */
export const inputClass = (hasError) =>
  `block w-full rounded-md border bg-white px-4 py-3 text-base text-ink placeholder:text-slate-400 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30 ${
    hasError ? "border-brand-red" : "border-slate-300 hover:border-slate-400"
  }`;

/** Label + control + error message. The control is passed as children. */
export default function FormField({ id, label, required = false, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required ? (
          <span className="text-brand-red" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-slate-500"> (optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 flex items-start gap-1.5 text-sm text-brand-red-dark"
        >
          <AlertCircle size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}
