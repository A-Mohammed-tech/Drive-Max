/** Standard page section: consistent vertical rhythm and content width. */
export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
