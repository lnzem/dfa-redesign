"use client";
import Image from "next/image";

const PARTNER_LOGOS = [
  { src: "/images/dfa-seal.png",          alt: "DFA" },
  { src: "/images/transparency-seal.png", alt: "Transparency Seal" },
  { src: "/images/bagong-pilipinas.png",  alt: "Bagong Pilipinas" },
  { src: "/images/foi-logo.png",          alt: "Freedom of Information" },
];

const CONTACT_ITEMS = [
  {
    icon: "phone",
    label: "Trunkline:",
    value: "(632) 8 834-4000",
  },
  {
    icon: "location",
    label: "ATN:",
    value: "(632) 8 834-4000 loc 4031",
  },
  {
    icon: "question",
    label: "Consular Inquiries:",
    value: "(02)8651-9400",
  },
];

const SOCIAL_LINKS = [
  { name: "Facebook", href: "#", icon: FacebookIcon },
  { name: "X", href: "#", icon: XIcon },
  { name: "YouTube", href: "#", icon: YouTubeIcon },
  { name: "Instagram", href: "#", icon: InstagramIcon },
];

const GOV_LINKS = [
  { label: "GOV.PH", href: "https://www.gov.ph" },
  { label: "Open Data Portal", href: "https://data.gov.ph" },
  { label: "Official Gazette", href: "https://www.officialgazette.gov.ph" },
];

const GOVERNMENT_LINKS = [
  { label: "Office of the President", href: "https://www.president.gov.ph" },
  { label: "Office of the Vice President", href: "https://www.ovp.gov.ph" },
  { label: "Senate of the Philippines", href: "https://www.senate.gov.ph" },
  { label: "House of Representatives", href: "https://www.congress.gov.ph" },
  { label: "Supreme Court", href: "https://sc.judiciary.gov.ph" },
  { label: "Court of Appeals", href: "https://www.ca.judiciary.gov.ph" },
  { label: "Sandiganbayan", href: "https://www.sandiganbayan.gov.ph" },
];

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="white"/>
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" fill="white"/>
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26A1.99 1.99 0 0014 9c0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" fill="white"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073C24 5.40365 18.6274 0 12 0C5.37258 0 0 5.40365 0 12.073C0 18.0988 4.38825 23.0935 10.125 24V15.563H7.07813V12.073H10.125V9.41306C10.125 6.38751 11.9165 4.71627 14.6576 4.71627C15.9705 4.71627 17.3438 4.95189 17.3438 4.95189V7.92146H15.8306C14.3399 7.92146 13.875 8.85225 13.875 9.8069V12.073H17.2031L16.6711 15.563H13.875V24C19.6118 23.0935 24 18.0988 24 12.073Z"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

const CONTACT_ICONS = { phone: PhoneIcon, location: LocationIcon, question: QuestionIcon };

export default function Footer() {
  return (
    <footer style={{ width: "100%", fontFamily: "'Public Sans', sans-serif", }}>

      {/* ── Upper Footer ── */}
      <div style={{
        background: "linear-gradient(180deg, #F8F9FA 0%, #0038A8 143.48%)",
        height: "276px",
        padding: "0 44px",
        display: "grid",
        gridTemplateColumns: "321px 27px 1fr 37px 1fr 87px 283px",
        alignItems: "start",
        paddingTop: "24px",
      }}>

        {/* ── DPO Badge ── */}
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <img
            src="/images/dpo-seal.png"
            alt="DPO/DPS Registered — National Privacy Commission"
            style={{ width: "321px", height: "244px", objectFit: "contain", display: "block" }}
          />
        </div>
        <div />

        {/* ── About / Charter ── */}
        <div>
          {/* Partner logos row */}
          <div style={{ display: "flex", gap: "1.2vw", marginBottom: "1.2vw", alignItems: "center" }}>
            {PARTNER_LOGOS.map((logo, i) => (
              <div key={i} style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                border: "1.5px solid rgba(255,255,255,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}>
                <Image src={logo.src} alt={logo.alt} width={55} height={55} style={{ objectFit: "contain" }} />
              </div>
            ))}
          </div>

          <p style={{
            color: "#FFF",
            fontFamily: "'Roboto', sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "normal",
            marginBottom: "20px",
          }}>
            The history of the Philippines and the Department of Foreign Affairs are deeply linked; the DFA's milestones directly mirror the nation's journey toward independence.
          </p>

          <h4 style={{
            color: "#FFF",
            fontFamily: "'Roboto', sans-serif",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "normal",
            marginBottom: "8px",
          }}>
            Citizen's Charter
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.3vw" }}>
            {["DFA - Citizen's Charter", "DFA - Certificate of Compliance"].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.4vw" }}>
                <span style={{ color: "#D4AF37", fontSize: "0.7em" }}>•</span>
                <a href="#" style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "clamp(11px, 0.85vw, 13px)",
                  textDecoration: "underline",
                  textDecorationColor: "rgba(255,255,255,0.4)",
                  textUnderlineOffset: "3px",
                }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div />
        {/* ── Contact Us ── */}
        <div>
          <h3 style={{
            color: "#FFF",
            fontFamily: "'Roboto', sans-serif",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "normal",
            marginBottom: "16px",
          }}>
            Contact Us
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "8px" }}>
            {CONTACT_ITEMS.map((item) => {
              const IconComp = CONTACT_ICONS[item.icon];
              return (
                <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "0.7vw" }}>
                  <div style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    background: "#D4AF37",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "0.1vw",
                  }}>
                    <IconComp />
                  </div>
                  <div>
                    <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(10px, 0.75vw, 12px)" }}>
                      {item.label}
                    </div>
                    <div style={{
                      color: "white",
                      fontStyle: "italic",
                      fontSize: "clamp(11px, 0.85vw, 14px)",
                      fontWeight: 500,
                    }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Follow Us */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginTop: "12px" }}>
            <span style={{
              color: "#FFF",
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "normal",
            }}>
              Follow Us
            </span>
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.name} href={social.href} aria-label={social.name} style={{
                  width: "23px",
                  height: "23px",
                  borderRadius: "4px",
                  background: "#D4AF37",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  transition: "background 0.2s",
                }}>
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div />
        {/* ── Map ── */}
        <div>
          <div style={{
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            marginBottom: "6px",
            width: "283px",
            height: "148px",
            flexShrink: 0,
          }}>
            <img
              src="/images/dfa-map.png"
              alt="DFA Home Office Location Map"
              style={{ width: "283px", height: "148px", objectFit: "cover", display: "block" }}
            />
          </div>
          <p style={{
            color: "#FFF",
            fontFamily: "'Public Sans', sans-serif",
            fontSize: "10px",
            fontWeight: 400,
            lineHeight: "normal",
            textAlign: "right",
            marginBottom: "2px",
          }}>
            Department of Foreign Affairs - Home Office
          </p>
          <p style={{
            color: "#E4E4E4",
            fontFamily: "'Public Sans', sans-serif",
            fontSize: "10px",
            fontWeight: 300,
            lineHeight: "normal",
            textAlign: "right",
          }}>
            Double Dragon Tower, 76 DD Meridian Ave,<br />
            Pasay City, Metro Manila
          </p>
        </div>
      </div>

      {/* ── Lower Footer ── */}
      <div style={{
        background: "linear-gradient(90deg, #F8F9FA 0%, #F0E8CC 51.9%, #D4AF37 100%)",
        height: "255px",
        padding: "25px 0 45px 0",
        display: "grid",
        gridTemplateColumns: "110px 1fr 1fr 1fr",
        columnGap: "46px",
        alignItems: "start",
      }}>

        {/* ── PH Seal Watermark ── */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", paddingTop: "0", paddingLeft: "0" }}>
          <div style={{ opacity: 0.25, filter: "sepia(0.3)" }}>
            <Image src="/images/ph-coat-of-arms.png" alt="Republika ng Pilipinas" width={152} height={169}
              style={{ width: "152px", height: "169px", objectFit: "contain" }} />
          </div>
          <p style={{
            color: "rgba(0,56,168,0.3)",
            fontSize: "clamp(9px, 0.7vw, 11px)",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginTop: "0.5vw",
            textAlign: "center",
          }}>
            Republika ng Pilipinas
          </p>
        </div>

        {/* ── Republic of the Philippines ── */}
        <div>
          <h3 style={{
            fontFamily: "'Roboto', sans-serif",
            color: "#636363",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "normal",
            marginBottom: "12px",
          }}>
            Republic of the Philippines
          </h3>
          <p style={{
            color: "#3a3a3a",
            fontSize: "clamp(11px, 0.88vw, 14px)",
            lineHeight: 1.65,
          }}>
            All content is in the public domain unless otherwise stated.
          </p>
        </div>

        {/* ── About GovPH ── */}
        <div>
          <h3 style={{
            fontFamily: "'Roboto', sans-serif",
            color: "#636363",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "normal",
            marginBottom: "12px",
          }}>
            About GovPH
          </h3>
          <p style={{
            color: "#3a3a3a",
            fontSize: "clamp(11px, 0.88vw, 14px)",
            lineHeight: 1.65,
            marginBottom: "1vw",
          }}>
            Learn more about the Philippine government, its structure, how government works and the people behind it.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.35vw" }}>
            {GOV_LINKS.map((link) => (
              <li key={link.label} style={{ display: "flex", alignItems: "center", gap: "0.4vw" }}>
                <span style={{ color: "#0038A8", fontSize: "0.7em" }}>•</span>
                <a href={link.href} target="_blank" rel="noopener noreferrer" style={{
                  color: "#0038A8",
                  fontSize: "clamp(11px, 0.85vw, 13px)",
                  textDecoration: "underline",
                  textDecorationColor: "rgba(0,56,168,0.4)",
                  textUnderlineOffset: "3px",
                }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Government Links ── */}
        <div>
          <h3 style={{
            fontFamily: "'Roboto', sans-serif",
            color: "#636363",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "normal",
            marginBottom: "12px",
          }}>
            Government Links
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.35vw" }}>
            {GOVERNMENT_LINKS.map((link) => (
              <li key={link.label} style={{ display: "flex", alignItems: "center", gap: "0.4vw" }}>
                <span style={{ color: "#0038A8", fontSize: "0.7em" }}>•</span>
                <a href={link.href} target="_blank" rel="noopener noreferrer" style={{
                  color: "#0038A8",
                  fontSize: "clamp(11px, 0.85vw, 13px)",
                  textDecoration: "underline",
                  textDecorationColor: "rgba(0,56,168,0.4)",
                  textUnderlineOffset: "3px",
                }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </footer>
  );
}