'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileNav = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <header className="header" id="top">
        <div className="container">
          <div className="header__inner">
            <a href="#top" className="header__logo" aria-label="Bright Future Academy home">
              <div className="header__logo-mark">
                <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="13,2 16,10 25,10 18,15.5 20.5,24 13,19 5.5,24 8,15.5 1,10 10,10" fill="#E8A020"/>
                </svg>
              </div>
              <div className="header__logo-text">
                <div className="header__logo-name">Bright Future Academy</div>
                <div className="header__logo-tagline">Nurturing Excellence. Building Character.</div>
              </div>
            </a>

            <nav className="header__nav" aria-label="Main navigation">
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#why-us">Why Us</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>

            <div className="header__right">
              <a href="tel:+254700000000" className="header__phone">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 4.18 2 2 0 015.07 2h3a2 2 0 012 1.72c.12.96.36 1.9.72 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006.99 7l1.27-1.27a2 2 0 012.11-.45c.91.36 1.85.6 2.81.72A2 2 0 0122 16.92z"/>
                </svg>
                +254 700 000 000
              </a>
              <a href="#contact" className="btn btn--primary">Book a Visit</a>
              <button className="header__menu-toggle" onClick={toggleMobileNav} aria-label="Open menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="7" x2="21" y2="7"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="17" x2="21" y2="17"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div id="mobile-nav" style={{
          display: 'flex',
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'var(--navy)',
          padding: '80px 24px 40px',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <button 
            onClick={toggleMobileNav}
            style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <a href="#about" onClick={toggleMobileNav} style={{ fontSize: '22px', fontFamily: 'var(--font-display)', color: 'white', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>About</a>
          <a href="#programs" onClick={toggleMobileNav} style={{ fontSize: '22px', fontFamily: 'var(--font-display)', color: 'white', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Programs</a>
          <a href="#why-us" onClick={toggleMobileNav} style={{ fontSize: '22px', fontFamily: 'var(--font-display)', color: 'white', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Why Us</a>
          <a href="#testimonials" onClick={toggleMobileNav} style={{ fontSize: '22px', fontFamily: 'var(--font-display)', color: 'white', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Testimonials</a>
          <a href="#contact" onClick={toggleMobileNav} style={{ fontSize: '22px', fontFamily: 'var(--font-display)', color: 'white', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Contact</a>

          <a href="#contact" onClick={toggleMobileNav} className="btn btn--primary" style={{ marginTop: '24px', justifyContent: 'center' }}>
            Book a Visit
          </a>
        </div>
      )}
    </>
  );
}