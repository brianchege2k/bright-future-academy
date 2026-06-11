export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__eyebrow">CBC Curriculum · PrePrimary to Junior School</div>
          <h1 className="hero__heading">
            Where Every Child&apos;s<br />
            <span>Future Shines</span> Bright
          </h1>
          <p className="hero__sub">
            At Bright Future Academy, we nurture academic excellence, strong character, creativity, and leadership — giving every child the foundation they need to thrive.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
              </svg>
              Apply for Admission
            </a>
            <a href="#about" className="btn btn--outline">Learn More About Us</a>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
        Scroll
      </div>
    </section>
  );
}