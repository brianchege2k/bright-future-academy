export default function Programs() {
  return (
    <section className="section section--alt" id="programs" aria-labelledby="programs-heading">
      <div className="container">
        <div className="section__header animate-on-scroll">
          <span className="section__eyebrow">What We Offer</span>
          <h2 className="section__heading" id="programs-heading">Our Academic Programs</h2>
          <p className="section__sub">From their very first day of school through the junior years, we provide a structured, nurturing learning journey.</p>
        </div>

        <div className="programs__grid">
          {/* Pre-Primary */}
          <div className="program-card animate-on-scroll">
            <div className="program-card__icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
              </svg>
            </div>
            <div className="program-card__age">Ages 3 – 5</div>
            <h3 className="program-card__title">Pre-Primary</h3>
            <p className="program-card__desc">A warm, play-based environment where young learners build foundational literacy, numeracy, creativity, and social skills.</p>
          </div>

          {/* Lower Primary */}
          <div className="program-card animate-on-scroll" style={{ transitionDelay: '0.08s' }}>
            <div className="program-card__icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
              </svg>
            </div>
            <div className="program-card__age">Grade 1 – 3</div>
            <h3 className="program-card__title">Lower Primary</h3>
            <p className="program-card__desc">CBC-aligned core subjects, project-based learning, and regular assessments help learners develop critical thinking.</p>
          </div>

          {/* Upper Primary */}
          <div className="program-card animate-on-scroll" style={{ transitionDelay: '0.16s' }}>
            <div className="program-card__icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <div className="program-card__age">Grade 4 – 6</div>
            <h3 className="program-card__title">Upper Primary</h3>
            <p className="program-card__desc">Deeper subject exploration, mentorship, STEM activities, and leadership opportunities.</p>
          </div>

          {/* Junior School */}
          <div className="program-card animate-on-scroll" style={{ transitionDelay: '0.24s' }}>
            <div className="program-card__icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
                <line x1="12" y1="12" x2="12" y2="16"/>
                <line x1="10" y1="14" x2="14" y2="14"/>
              </svg>
            </div>
            <div className="program-card__age">Grade 7 – 9</div>
            <h3 className="program-card__title">Junior School</h3>
            <p className="program-card__desc">A rigorous, inquiry-driven curriculum with specialist teachers and values formation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}