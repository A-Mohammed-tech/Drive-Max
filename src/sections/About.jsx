import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { GearGraphic } from "../components/Graphics";
import { about } from "../data/content";

export default function About() {
  return (
    <Section id="about" className="bg-mist">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading title={about.title} />
          <Reveal delay={100} className="mt-8 space-y-5 text-lg leading-relaxed text-slate-700">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="relative overflow-hidden rounded-xl bg-brand-navy p-8 text-white sm:p-10">
            <GearGraphic className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 opacity-15" />
            <h3 className="font-display text-xl font-extrabold">Company at a glance</h3>
            <dl className="relative mt-6 space-y-5">
              {about.facts.map((f) => (
                <div key={f.label} className="border-l-4 border-brand-red pl-4">
                  <dt className="text-sm font-medium text-blue-200">{f.label}</dt>
                  <dd className="mt-0.5 text-lg font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
