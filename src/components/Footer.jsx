import { MapPin, Phone, Smartphone, ArrowUp } from "lucide-react";
import Logo from "./Logo";
import { WaveDivider } from "./Graphics";
import { company, navLinks } from "../data/content";

export default function Footer() {
  return (
    <footer>
      {/* Wave from the letterhead; the strip behind it matches the section above */}
      <div className="bg-white">
        <WaveDivider />
      </div>

      <div className="-mt-px bg-brand-navy text-blue-100">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-10 pt-6 sm:px-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo framed />
            <p className="mt-6 max-w-sm leading-relaxed">
              Automobile spare parts manufacturer at SIPCOT Industrial Estate, Chennai. Four-wheeler
              spare parts, engine components and wheels.
            </p>
            <p className="mt-5 font-display text-xl font-extrabold italic text-white">
              {company.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="font-display text-lg font-extrabold text-white">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="transition-colors hover:text-white hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="font-display text-lg font-extrabold text-white">Get in touch</h2>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-red" />
                <address className="not-italic leading-relaxed">
                  {company.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </address>
              </li>
              <li className="flex gap-3">
                <Phone size={20} aria-hidden="true" className="shrink-0 text-brand-red" />
                <a href={company.landline.href} className="hover:text-white hover:underline">
                  {company.landline.display}
                </a>
              </li>
              <li className="flex gap-3">
                <Smartphone size={20} aria-hidden="true" className="shrink-0 text-brand-red" />
                <a href={company.mobile.href} className="hover:text-white hover:underline">
                  {company.mobile.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-6 text-sm sm:flex-row sm:items-center sm:px-8">
            <p>
              &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-brand-red"
            >
              Back to top
              <ArrowUp size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
