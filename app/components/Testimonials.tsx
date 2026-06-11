export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="section__header animate-on-scroll">
          <span className="section__eyebrow">Parent Voices</span>
          <h2 className="section__heading" id="testimonials-heading">What Our Families Say</h2>
          <p className="section__sub">Don&apos;t take our word for it — hear directly from the parents who chose Bright Future Academy.</p>
        </div>

        <div className="testimonials__grid">
          <div className="testimonial-card animate-on-scroll">
            <div className="testimonial-card__stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
            <p className="testimonial-card__quote">
              &ldquo;My daughter joined BFA in Grade 1 and the transformation has been remarkable. She&apos;s confident, curious, and genuinely excited to go to school every morning.&rdquo;
            </p>
            <div className="testimonial-card__author">
              <div className="testimonial-card__avatar">AN</div>
              <div>
                <div className="testimonial-card__name">Amina Njoroge</div>
                <div className="testimonial-card__role">Parent of Grade 3 learner</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <div className="testimonial-card__stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
            <p className="testimonial-card__quote">
              &ldquo;What sets BFA apart is how they balance academic rigour with genuine fun. My son discovered a love for science through their project-based units.&rdquo;
            </p>
            <div className="testimonial-card__author">
              <div className="testimonial-card__avatar">DM</div>
              <div>
                <div className="testimonial-card__name">David Mutua</div>
                <div className="testimonial-card__role">Parent of Grade 5 learner</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
            <div className="testimonial-card__stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
            <p className="testimonial-card__quote">
              &ldquo;The school&apos;s communication is excellent. The management is accessible and passionate about the school&apos;s mission.&rdquo;
            </p>
            <div className="testimonial-card__author">
              <div className="testimonial-card__avatar">GW</div>
              <div>
                <div className="testimonial-card__name">Grace Wanjiku</div>
                <div className="testimonial-card__role">Parent of Pre-Primary &amp; Grade 7 learners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}