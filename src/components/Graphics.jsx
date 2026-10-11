/**
 * Original vector illustrations used until real product photos are added.
 * All use a 400x400 viewBox and the brand palette.
 */

const LIGHT = "#e8eef6";
const MID = "#9fb4cc";
const BLUE = "#0a5aaa";
const NAVY = "#062a52";
const RED = "#e3101d";

/** Builds a gear outline as an SVG polygon `points` string. */
function gearPoints(cx, cy, teeth, rOut, rIn) {
  const step = (Math.PI * 2) / teeth;
  const pts = [];
  for (let i = 0; i < teeth; i += 1) {
    const a = i * step;
    [
      [0.05, rIn],
      [0.2, rOut],
      [0.45, rOut],
      [0.6, rIn],
    ].forEach(([f, r]) => {
      const ang = a + f * step;
      pts.push(`${(cx + r * Math.cos(ang)).toFixed(1)},${(cy + r * Math.sin(ang)).toFixed(1)}`);
    });
  }
  return pts.join(" ");
}

/** Five-spoke alloy wheel. `spin` makes it rotate slowly. */
export function WheelGraphic({ className = "", spin = false }) {
  const angles = [0, 72, 144, 216, 288];
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" focusable="false">
      <g className={spin ? "spin-slow" : undefined} style={{ transformOrigin: "200px 200px" }}>
        <circle cx="200" cy="200" r="190" fill="#041c38" />
        <circle
          cx="200"
          cy="200"
          r="176"
          fill="none"
          stroke="#16467d"
          strokeWidth="10"
          strokeDasharray="4 10"
        />
        <circle cx="200" cy="200" r="152" fill={LIGHT} />
        <circle cx="200" cy="200" r="152" fill="none" stroke={RED} strokeWidth="6" />
        <circle cx="200" cy="200" r="128" fill={NAVY} />
        {angles.map((a) => (
          <path
            key={a}
            transform={`rotate(${a} 200 200)`}
            d="M184 205 L174 84 Q200 66 226 84 L216 205 Z"
            fill="#f7f9fc"
            stroke="#c4d2e3"
            strokeWidth="2"
          />
        ))}
        <circle cx="200" cy="200" r="46" fill={LIGHT} stroke={MID} strokeWidth="3" />
        {angles.map((a) => {
          const r = (a + 36) * (Math.PI / 180);
          return (
            <circle
              key={a}
              cx={200 + 29 * Math.cos(r)}
              cy={200 + 29 * Math.sin(r)}
              r="5"
              fill={MID}
            />
          );
        })}
        <circle cx="200" cy="200" r="12" fill={RED} />
      </g>
    </svg>
  );
}

/** Piston and connecting rod, standing in for engine components. */
export function PistonGraphic({ className = "" }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" focusable="false">
      {/* connecting rod */}
      <path d="M186 170 L180 285 L220 285 L214 170 Z" fill="#c6d3e3" />
      <circle cx="200" cy="320" r="50" fill={LIGHT} />
      <circle cx="200" cy="320" r="24" fill={NAVY} />
      <circle cx="200" cy="320" r="24" fill="none" stroke={RED} strokeWidth="5" />
      <circle cx="160" cy="320" r="5" fill={MID} />
      <circle cx="240" cy="320" r="5" fill={MID} />
      {/* piston */}
      <rect x="125" y="48" width="150" height="138" rx="16" fill={LIGHT} />
      <rect x="125" y="74" width="150" height="7" fill={MID} />
      <rect x="125" y="94" width="150" height="7" fill={MID} />
      <rect x="125" y="114" width="150" height="7" fill={MID} />
      <rect x="140" y="55" width="120" height="8" rx="4" fill="#ffffff" />
      <circle cx="200" cy="158" r="18" fill={BLUE} />
      <circle cx="200" cy="158" r="7" fill={LIGHT} />
    </svg>
  );
}

/** Two meshing gears, standing in for general spare parts. */
export function GearGraphic({ className = "" }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" focusable="false">
      <polygon points={gearPoints(175, 225, 14, 125, 104)} fill={LIGHT} />
      <circle cx="175" cy="225" r="78" fill={BLUE} />
      <circle cx="175" cy="225" r="78" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.35" />
      <circle cx="175" cy="225" r="26" fill={LIGHT} />
      <circle cx="175" cy="225" r="10" fill={NAVY} />
      <polygon points={gearPoints(305, 95, 9, 62, 49)} fill={RED} />
      <circle cx="305" cy="95" r="30" fill="#ffffff" opacity="0.9" />
      <circle cx="305" cy="95" r="11" fill={NAVY} />
    </svg>
  );
}

/** Picks the right illustration for a product `kind`. */
export function ProductIllustration({ kind, className = "" }) {
  if (kind === "engine") return <PistonGraphic className={className} />;
  if (kind === "wheel") return <WheelGraphic className={className} />;
  return <GearGraphic className={className} />;
}

/** Wave and swoosh from the bottom of the letterhead, used above the footer. */
export function WaveDivider({ className = "" }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`block h-14 w-full sm:h-24 ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 62 C 260 12, 560 12, 840 66 S 1280 118, 1440 34"
        fill="none"
        stroke={RED}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path d="M0 80 C 260 30, 560 30, 840 84 S 1280 136, 1440 52 L1440 121 L0 121 Z" fill={NAVY} />
    </svg>
  );
}
