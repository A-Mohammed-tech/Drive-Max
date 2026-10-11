import Reveal from "./Reveal";

/** Section title with the short red bar from the letterhead, plus an optional intro. */
export default function SectionHeading({ title, children, light = false, className = "" }) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <h2
        className={`font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      <span aria-hidden="true" className="mt-5 block h-1 w-14 bg-brand-red" />
      {children && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? "text-blue-100" : "text-slate-600"}`}>
          {children}
        </p>
      )}
    </Reveal>
  );
}
