export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about__grid">
          <div className="about__image-wrap animate-on-scroll">
            <img
              className="about__image"
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
              alt="Students learning at Bright Future Academy"
              loading="lazy"
            />
            <div className="about__badge" aria-label="Established 2010">
              <span className="about__badge-num">15+</span>
              <span className="about__badge-label">Years of<br/>Excellence</span>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <span className="section__eyebrow">Who We Are</span>
            <h2 className="section__heading" id="about-heading">A School Built on Values &amp; Vision</h2>
            <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: '1.75', marginBottom: '16px' }}>
              Bright Future Academy is a CBC-aligned school offering quality education from Pre-Primary through Junior School. We believe every child deserves a safe, inspiring environment where they can grow into their full potential.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: '1.75', marginBottom: '32px' }}>
              Our approach blends rigorous academics with hands-on learning, creative arts, and social-emotional development — producing well-rounded, confident young leaders ready for tomorrow&apos;s world.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <div className="about__stat-num">600+</div>
                <div className="about__stat-label">Enrolled learners</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-num">45+</div>
                <div className="about__stat-label">Qualified teachers</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-num">98%</div>
                <div className="about__stat-label">Parent satisfaction</div>
              </div>
              <div className="about__stat">
                <div className="about__stat-num">12</div>
                <div className="about__stat-label">Co-curricular clubs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}