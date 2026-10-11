import { ChevronRight } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { manufacturing } from "../data/content";

export default function Manufacturing() {
  const { title, intro, capabilities, flow } = manufacturing;

  return (
    <Section id="manufacturing" className="bg-brand-navy text-white">
      <SectionHeading title={title} light>
        {intro}
      </SectionHeading>

      {/* The path a part takes through the factory: a real sequence */}
      <Reveal className="mt-14">
        <ol className="grid gap-4 md:grid-cols-4">
          {flow.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="flex h-full items-start gap-4 rounded-xl border border-white/15 bg-white/5 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <step.icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-extrabold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-blue-100">{step.text}</p>
                </div>
              </div>
              {i < flow.length - 1 && (
                <ChevronRight
                  size={22}
                  aria-hidden="true"
                  className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-brand-red md:block"
                />
              )}
            </li>
          ))}
        </ol>
      </Reveal>

      <div className="mt-16">
        <Reveal as="h3" className="font-display text-2xl font-extrabold">
          What we do
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 80}>
              <div className="group h-full rounded-xl bg-white p-6 text-ink transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-mist text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                  <c.icon size={24} aria-hidden="true" />
                </span>
                <h4 className="mt-5 font-display text-lg font-extrabold leading-snug text-brand-navy">
                  {c.title}
                </h4>
                <p className="mt-2 leading-relaxed text-slate-600">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
