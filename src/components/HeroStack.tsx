/**
 * Decorative hero motif — a React atom and a Node hexagon overlapping into one mark.
 * Purely visual, hidden from assistive tech.
 */
export default function HeroStack() {
  const atom = { cx: 170, cy: 150, rx: 92, ry: 36 };
  const hex = { cx: 272, cy: 150, r: 62 };

  return (
    <svg viewBox="0 0 420 300" className="w-full rounded-[10px] bg-bg" role="presentation" focusable="false">
      <defs>
        <pattern id="hero-grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M30 0H0V30" fill="none" stroke="var(--line-2)" strokeWidth="1" />
        </pattern>
        <radialGradient id="hero-fade" cx="50%" cy="45%" r="70%">
          <stop offset="55%" stopColor="#fff" stopOpacity="1" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="hero-mask">
          <rect width="420" height="300" fill="url(#hero-fade)" />
        </mask>
        <radialGradient id="glow-azure" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--azure)" stopOpacity=".35" />
          <stop offset="100%" stopColor="var(--azure)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow-sand" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--sand)" stopOpacity=".35" />
          <stop offset="100%" stopColor="var(--sand)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g mask="url(#hero-mask)">
        <rect width="420" height="300" fill="url(#hero-grid)" />

        <g className="opacity-0 animate-plot" style={{ animationDelay: '.1s' }}>
          <circle cx={atom.cx} cy={atom.cy} r="110" fill="url(#glow-azure)" />
          <circle cx={hex.cx} cy={hex.cy} r="110" fill="url(#glow-sand)" />

          <g
            className="animate-[spin_10s_linear_infinite]"
            style={{ transformOrigin: `${atom.cx}px ${atom.cy}px` }}
          >
            <ellipse cx={atom.cx} cy={atom.cy} rx={atom.rx} ry={atom.ry} fill="none" stroke="var(--azure)" strokeWidth="2" />
            <ellipse
              cx={atom.cx}
              cy={atom.cy}
              rx={atom.rx}
              ry={atom.ry}
              fill="none"
              stroke="var(--azure)"
              strokeWidth="2"
              transform={`rotate(60 ${atom.cx} ${atom.cy})`}
            />
            <ellipse
              cx={atom.cx}
              cy={atom.cy}
              rx={atom.rx}
              ry={atom.ry}
              fill="none"
              stroke="var(--azure)"
              strokeWidth="2"
              transform={`rotate(120 ${atom.cx} ${atom.cy})`}
            />
          </g>
          <circle cx={atom.cx} cy={atom.cy} r="9" fill="var(--azure)" />

          <g className="animate-[pulse_3.5s_ease-in-out_infinite]" style={{ transformOrigin: `${hex.cx}px ${hex.cy}px` }}>
            <polygon
              points="272,88 325.7,119 325.7,181 272,212 218.3,181 218.3,119"
              fill="none"
              stroke="var(--sand)"
              strokeWidth="2"
            />
            <polygon
              points="272,112.8 304.2,131.4 304.2,168.6 272,187.2 239.8,168.6 239.8,131.4"
              fill="none"
              stroke="var(--sand)"
              strokeWidth="1.4"
              opacity=".6"
            />
          </g>

          <text x="110" y="258" fill="var(--muted)" fontSize="11" fontFamily="IBM Plex Mono, monospace">
            React.js
          </text>
          <text x="284" y="258" fill="var(--muted)" fontSize="11" fontFamily="IBM Plex Mono, monospace">
            Node.js
          </text>
        </g>
      </g>
    </svg>
  );
}
