"use client";

const QUICK_SERVICES = [
  { label: "Authentication",      icon: "/images/authentication.svg",     leftPct: 18.38, topPct: 83.68 },
  { label: "Civil\nRegistration", icon: "/images/civil-registration.svg", leftPct: 37.98, topPct: 93.88 },
  { label: "Passport",            icon: "/images/passport.svg",           leftPct: 62.14, topPct: 93.27 },
  { label: "VISA",                icon: "/images/visa.svg",               leftPct: 81.42, topPct: 83.05 },
];

const CHEVRON_PATH =
  "M1281 389.699C1281 434.581 1251.43 472.556 1210.71 485.21C1206.79 487.033 1202.57 488.546 1198.05 489.699L635.074 638.5L85.7646 495.781C69.6418 491.592 56.0229 483.688 45.2529 473.395C18.0004 455.532 0 424.718 0 389.699V0H1281V389.699Z";

// All sizes as vw, based on Figma 1281px frame
// btn = 164/1281 * 100 = 12.803vw
// border = 12/1281 * 100 = 0.937vw
// icon = 164*0.45/1281 * 100 = 5.762vw
// SVG natural height at 100vw = 639/1281 * 100 = 49.883vw
// Deepest button bottom (Civil Reg): 93.88% * 49.883vw + 6.4vw = 53.2vw
// paddingBottom = 53.2 - 49.883 + label(3vw) = ~6.5vw → use 8vw for safety

export default function Hero() {
  return (
    <section style={{ width: "100%", paddingBottom: "8vw", overflow: "visible" }}>
      <div style={{ position: "relative", width: "100%", overflow: "visible" }}>

        {/* ── Hero SVG ── */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1281 639"
          style={{ display: "block", width: "100%", height: "auto" }}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <clipPath id="hero-clip">
              <path d={CHEVRON_PATH} />
            </clipPath>
            <linearGradient id="hero-overlay" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#0038A8" stopOpacity="0.20" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.50" />
            </linearGradient>
          </defs>
          <image
            href="/images/herounion.png"
            x="0" y="0" width="1281" height="639"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#hero-clip)"
          />
          <path d={CHEVRON_PATH} fill="url(#hero-overlay)" />
          <path
            d={CHEVRON_PATH}
            fill="none"
            stroke="#0038A8"
            strokeWidth="4"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* ── Quick Services ── */}
        {QUICK_SERVICES.map((svc) => (
          <div
            key={svc.label}
            style={{
              position:      "absolute",
              left:          `${svc.leftPct}%`,
              top:           `${svc.topPct}%`,
              transform:     "translate(-50%, -50%)",
              zIndex:        10,
              display:       "flex",
              flexDirection: "column",
              alignItems:    "center",
              gap:           "0.5vw",
            }}
          >
            <div
              style={{
                width:          "12.803vw",
                height:         "12.803vw",
                borderRadius:   "50%",
                background:     "radial-gradient(circle at 40% 35%, #D4AF37 0%, rgba(212,175,55,0) 100%)",
                boxShadow:      "0 4px 20px rgba(0,0,0,0.20)",
                border:         "0.937vw solid #FFFFFF",
                boxSizing:      "border-box",
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                flexShrink:     0,
              }}
            >
              <img
                src={svc.icon}
                alt={svc.label}
                style={{
                  width:     "5.762vw",
                  height:    "5.762vw",
                  objectFit: "contain",
                  filter:    "brightness(0) invert(1)",
                }}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
            <span
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize:   "clamp(10px, 1.875vw, 24px)",
                fontWeight: 400,
                color:      "#525252",
                textAlign:  "center",
                alignSelf:  "stretch",
                lineHeight: "normal",
                whiteSpace: "pre-line",
              }}
            >
              {svc.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}