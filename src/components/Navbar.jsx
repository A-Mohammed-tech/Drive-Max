import { useEffect, useState } from "react";
import { Menu, X, Phone, Smartphone } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { company, navLinks } from "../data/content";

export default function Navbar({ activeId }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow appears once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-brand-navy/10" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    aria-current={active ? "true" : undefined}
                    className={`group relative block px-3 py-2 text-sm font-semibold transition-colors ${
                      active ? "text-brand-red" : "text-ink hover:text-brand-blue"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 bottom-0 h-0.5 origin-left bg-brand-red transition-transform duration-300 ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden xl:block">
          <Button href="#contact" variant="primary" className="px-5 py-2.5 text-sm">
            Send an enquiry
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-brand-navy transition-colors hover:bg-mist xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      {/* Letterhead-style rule: long blue bar, short red bar */}
      <div className="flex h-1 gap-1" aria-hidden="true">
        <div className="flex-[8] bg-brand-blue" />
        <div className="flex-[2] bg-brand-red" />
      </div>

      {/* Mobile / tablet menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white xl:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
            <ul className="grid gap-1 sm:grid-cols-2">
              {navLinks.map((link) => {
                const active = activeId === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={close}
                      aria-current={active ? "true" : undefined}
                      className={`block rounded-md px-3 py-3 text-base font-semibold transition-colors ${
                        active
                          ? "bg-mist text-brand-red"
                          : "text-ink hover:bg-mist hover:text-brand-blue"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row">
              <Button href={company.landline.href} variant="outline" className="flex-1">
                <Phone size={18} aria-hidden="true" />
                {company.landline.display}
              </Button>
              <Button href={company.mobile.href} variant="outline" className="flex-1">
                <Smartphone size={18} aria-hidden="true" />
                {company.mobile.display}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
