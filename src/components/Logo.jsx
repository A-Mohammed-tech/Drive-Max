import { company } from "../data/content";

/**
 * Company logo lockup: the DM mark (cropped from the letterhead) plus live text,
 * so it stays sharp at any size. `framed` adds a white plate for dark backgrounds.
 */
export default function Logo({ framed = false, className = "" }) {
  return (
    <a
      href="#home"
      aria-label={`${company.name} - back to top`}
      className={`flex items-center gap-3 ${
        framed ? "w-fit rounded-lg bg-white px-4 py-3" : ""
      } ${className}`}
    >
      <img
        src={`${import.meta.env.BASE_URL}logo-mark.png`}
        alt=""
        width="220"
        height="130"
        className="h-10 w-auto sm:h-12"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-extrabold sm:text-3xl">
          <span className="text-brand-blue">Drive</span>
          <span className="text-brand-red">Max</span>
        </span>
        <span className="mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.1em] text-brand-blue sm:text-[0.65rem]">
          Spares Private Limited
        </span>
      </span>
    </a>
  );
}
