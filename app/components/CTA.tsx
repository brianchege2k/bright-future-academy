export default function CTA() {
  return (
    <section className="cta-section" aria-label="Admission call to action">
      <div className="container">
        <div className="cta-section__inner animate-on-scroll">
          <h2 className="cta-section__heading">
            Ready to Give Your Child the<br/>
            <span>Best Start in Life?</span>
          </h2>
          <p className="cta-section__sub">
            Book a school visit and see first-hand why hundreds of families trust Bright Future Academy.
          </p>
          <div className="cta-section__actions">
            <a href="#contact" className="btn btn--primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book a School Visit
            </a>
            <a href="tel:+254700000000" className="btn btn--outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 4.18 2 2 0 015.07 2h3a2 2 0 012 1.72c.12.96.36 1.9.72 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006.99 7l1.27-1.27a2 2 0 012.11-.45c.91.36 1.85.6 2.81.72A2 2 0 0122 16.92z"/>
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}