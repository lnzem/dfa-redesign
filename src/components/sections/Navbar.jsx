'use client'
import { useState } from 'react'
import Image from 'next/image'

const navLinks = ['Home', 'About Us', 'Transparency', 'News', 'Resources']

const activeTextStyle = {
  fontFamily: '"Public Sans", sans-serif',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '140%',
  background: 'linear-gradient(177deg, #EBDDB1 17.64%, #D4AF37 97.38%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}

const gradientText = {
  background: 'linear-gradient(90deg, #F8F9FA 0%, #EBDDB1 41.53%, #D4AF37 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}

export default function Navbar() {
  const [active, setActive] = useState('Home')

  return (
    <nav
      className="w-full flex items-center justify-between px-16 overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, #0038A8 0%, #7997D1 69.27%, #F0F4FA 100%)',
        height: '126px',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="/images/dfa-seal.png"
          alt="DFA Seal"
          width={70}
          height={70}
          style={{ objectFit: 'contain' }}
        />
        <div>
          <p style={{
            color: '#F8F9FA',
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            fontStyle: 'italic',
            fontWeight: 400,
            lineHeight: 'normal',
          }}>
            Republic of the Philippines
          </p>
          <p style={{
            fontFamily: 'Newsreader, serif',
            fontSize: '26px',
            fontWeight: 700,
            lineHeight: 'normal',
            ...gradientText,
          }}>
            Department of Foreign Affairs
          </p>
        </div>
      </div>

      {/* Right side: Nav Links + Icons */}
      <div className="flex items-center h-full gap-6">

        {/* Nav Links */}
        <div className="flex items-center h-full">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActive(link)}
              className="relative flex items-center justify-center transition-all px-5 h-full"
            >
              {active === link && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 113 86"
                  fill="none"
                  preserveAspectRatio="none"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '75%',
                  }}
                >
                  <path d="M13.9131 12.2203C15.2496 5.1329 21.441 0 28.6533 0H86.1377C93.4837 0 99.7488 5.32007 100.939 12.5689L113 86H0L13.9131 12.2203Z" fill="#F8F9FA"/>
                </svg>
              )}
              {active === link ? (
                <span className="relative z-10" style={activeTextStyle}>{link}</span>
              ) : (
                <span style={{
                  color: 'white',
                  fontFamily: '"Public Sans", sans-serif',
                  fontSize: '18px',
                  fontWeight: 400,
                }}>
                  {link}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Icon Buttons */}
        <div className="flex items-center gap-3">
          {[
            { src: '/icons/scheduler.svg', alt: 'Appointment' },
            { src: '/icons/search.svg', alt: 'Search' },
            { src: '/icons/phone.svg', alt: 'Contact' },
          ].map((icon) => (
            <button
              key={icon.alt}
              className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center"
            >
              <Image src={icon.src} alt={icon.alt} width={20} height={20} className="invert" />
            </button>
          ))}
        </div>

      </div>
    </nav>
  )
}