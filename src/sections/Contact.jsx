import { MapPin, Phone, Smartphone, ArrowRight } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import { company } from "../data/content";

function InfoRow({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-mist text-brand-red">
        <Icon size={22} aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-display text-base font-extrabold text-brand-navy">{title}</h3>
        <div className="mt-1 leading-relaxed text-slate-700">{children}</div>
      </div>
    </div>
  );
}

export default function Contact({ enquiry }) {
  return (
    <Section id="contact">
      <SectionHeading title="Contact us">
        Call us or send an enquiry. We will reply using the details you give.
      </SectionHeading>

      <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-14">
        <Reveal className="space-y-8 lg:col-span-2">
          <InfoRow icon={MapPin} title="Address">
            <address className="not-italic">
              {company.name}
              <br />
              {company.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
          </InfoRow>

          <InfoRow icon={Phone} title="Land line">
            <a className="font-semibold hover:text-brand-blue" href={company.landline.href}>
              {company.landline.display}
            </a>
          </InfoRow>

          <InfoRow icon={Smartphone} title="Mobile">
            <a className="font-semibold hover:text-brand-blue" href={company.mobile.href}>
              {company.mobile.display}
            </a>
          </InfoRow>

          <Button
            href={company.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            icon={ArrowRight}
          >
            Find us on Google Maps
          </Button>
        </Reveal>

        <Reveal delay={120} className="relative lg:col-span-3">
          <ContactForm enquiry={enquiry} />
        </Reveal>
      </div>
    </Section>
  );
}
