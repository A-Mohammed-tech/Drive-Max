import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { quality } from "../data/content";

export default function Quality() {
  return (
    <Section id="quality">
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-2">
          <SectionHeading title={quality.title}>{quality.intro}</SectionHeading>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
          {quality.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 2) * 90}>
              <div className="h-full rounded-xl border border-slate-200 border-l-4 border-l-brand-red bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-navy/10">
                <item.icon size={28} aria-hidden="true" className="text-brand-blue" />
                <h3 className="mt-4 font-display text-lg font-extrabold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
