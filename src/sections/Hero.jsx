import { ArrowRight, MapPin } from "lucide-react";
import Button from "../components/Button";
import { WheelGraphic } from "../components/Graphics";
import { products } from "../data/content";

const speedLines = [
  { y: 14, w: 150, delay: 500 },
  { y: 34, w: 110, delay: 620 },
  { y: 54, w: 170, delay: 560 },
  { y: 74, w: 120, delay: 700 },
  { y: 94, w: 160, delay: 640 },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Slanted blue panel with a red edge, echoing the slant of the DM logo (desktop) */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[55%] bg-brand-red [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[53%] bg-brand-blue [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] lg:block"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:min-h-[640px] lg:grid-cols-2 lg:py-20">
        {/* Copy */}
        <div>
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            <span className="hero-rise block text-brand-blue" style={{ animationDelay: "50ms" }}>
              Precision Engineering.
            </span>
            <span className="hero-rise block text-brand-red" style={{ animationDelay: "200ms" }}>
              Reliable Performance.
            </span>
          </h1>

          <p
            className="hero-rise mt-7 max-w-xl text-lg leading-relaxed text-slate-600"
            style={{ animationDelay: "350ms" }}
          >
            DriveMax Spares manufactures four-wheeler spare parts, engine components and wheels at
            SIPCOT Industrial Estate, Chennai.
          </p>

          <div
            className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "480ms" }}
          >
            <Button href="#products" variant="primary" icon={ArrowRight}>
              View our products
            </Button>
            <Button href="#contact" variant="outline">
              Contact us
            </Button>
          </div>

          <ul
            className="hero-rise mt-10 flex flex-wrap gap-2.5"
            style={{ animationDelay: "600ms" }}
            aria-label="Product categories"
          >
            {products.map((p) => (
              <li key={p.id}>
                <a
                  href="#products"
                  className="inline-block rounded-full border border-slate-300 px-4 py-1.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-blue hover:bg-mist hover:text-brand-blue"
                >
                  {p.title}
                </a>
              </li>
            ))}
          </ul>

          <p
            className="hero-rise mt-8 flex items-center gap-2 text-sm font-medium text-slate-600"
            style={{ animationDelay: "700ms" }}
          >
            <MapPin size={18} aria-hidden="true" className="text-brand-red" />
            SIPCOT Industrial Estate, Chennai, Tamil Nadu
          </p>
        </div>

        {/* Visual: wheel with speed lines */}
        <div className="relative flex items-center justify-center rounded-3xl bg-brand-blue px-6 py-12 lg:rounded-none lg:bg-transparent lg:py-0">
          <svg
            viewBox="0 0 170 110"
            aria-hidden="true"
            focusable="false"
            className="absolute left-2 top-1/2 hidden w-32 -translate-y-1/2 sm:block lg:-left-4 lg:w-44"
          >
            {speedLines.map((l) => (
              <rect
                key={l.y}
                x={170 - l.w}
                y={l.y}
                width={l.w}
                height="5"
                rx="2.5"
                fill="#ffffff"
                opacity="0.7"
                className="speed-line"
                style={{ animationDelay: `${l.delay}ms` }}
              />
            ))}
          </svg>
          <div className="wheel-in relative w-[min(78%,440px)] drop-shadow-2xl">
            <WheelGraphic spin className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
