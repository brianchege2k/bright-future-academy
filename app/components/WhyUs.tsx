export default function WhyUs() {
  return (
    <section className="section" id="why-us" aria-labelledby="why-heading">
      <div className="container">
        <div className="section__header animate-on-scroll">
          <span className="section__eyebrow">Our Difference</span>
          <h2 className="section__heading" id="why-heading">Why Families Choose Us</h2>
          <p className="section__sub">We go beyond academics to develop the whole child — in mind, body, and character.</p>
        </div>

        <div className="why__grid">
          <div className="why-card animate-on-scroll">
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3 className="why-card__title">Qualified &amp; Caring Staff</h3>
            <p className="why-card__desc">Every teacher is CBC-trained, passionate, and committed to understanding each learner&apos;s unique strengths.</p>
          </div>

          <div className="why-card animate-on-scroll" style={{ transitionDelay: '0.08s' }}>
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 className="why-card__title">Safe &amp; Secure Environment</h3>
            <p className="why-card__desc">Gated campus, CCTV monitoring, and trained security ensure complete peace of mind.</p>
          </div>

          <div className="why-card animate-on-scroll" style={{ transitionDelay: '0.16s' }}>
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <h3 className="why-card__title">Holistic Development</h3>
            <p className="why-card__desc">Sports, arts, music, coding, and leadership clubs nurture creativity, resilience, and teamwork.</p>
          </div>

          <div className="why-card animate-on-scroll" style={{ transitionDelay: '0.24s' }}>
            <div className="why-card__icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
              </svg>
            </div>
            <h3 className="why-card__title">Active Parent Partnership</h3>
            <p className="why-card__desc">Regular progress updates, parent forums, and open-door policy keep families involved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}