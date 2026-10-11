import { CheckCircle2 } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { vision, mission, values } from "../data/content";

export default function VisionMission() {
  return (
    <Section id="vision" className="bg-mist">
      <SectionHeading title="Vision and mission" />

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-xl bg-brand-blue p-8 text-white sm:p-10">
            <h3 className="font-display text-2xl font-extrabold">Our vision</h3>
            <p className="mt-5 text-xl leading-relaxed">{vision.statement}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="h-full rounded-xl border border-slate-200 bg-white p-8 sm:p-10">
            <h3 className="font-display text-2xl font-extrabold text-brand-navy">Our mission</h3>
            <ul className="mt-5 space-y-3.5">
              {mission.map((m) => (
                <li key={m} className="flex gap-3 leading-relaxed text-slate-700">
                  <CheckCircle2
                    size={22}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-brand-red"
                  />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mt-16">
        <Reveal as="h3" className="font-display text-2xl font-extrabold text-brand-navy">
          What we value
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="h-full rounded-xl bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-navy/10">
                <v.icon size={28} aria-hidden="true" className="text-brand-red" />
                <h4 className="mt-4 font-display text-base font-extrabold text-brand-navy">
                  {v.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
