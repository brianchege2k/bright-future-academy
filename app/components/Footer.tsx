export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-name">Bright Future Academy</div>
            <div className="footer__brand-tagline">Nurturing Excellence. Building Character.</div>
            <p className="footer__brand-desc">
              A CBC-aligned school offering quality education from Pre-Primary to Junior School in Nairobi, Kenya.
            </p>
          </div>

          <div>
            <div className="footer__col-title">Quick Links</div>
            <nav className="footer__links">
              <a href="#about">About Us</a>
              <a href="#programs">Our Programs</a>
              <a href="#why-us">Why Choose Us</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact Us</a>
            </nav>
          </div>

          <div>
            <div className="footer__col-title">Programs</div>
            <nav className="footer__links">
              <a href="#programs">Pre-Primary</a>
              <a href="#programs">Lower Primary</a>
              <a href="#programs">Upper Primary</a>
              <a href="#programs">Junior School</a>
            </nav>
          </div>

          <div>
            <div className="footer__col-title">Contact</div>
            <div className="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 4.18 2 2 0 015.07 2h3a2 2 0 012 1.72c.12.96.36 1.9.72 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006.99 7l1.27-1.27a2 2 0 012.11-.45c.91.36 1.85.6 2.81.72A2 2 0 0122 16.92z"/>
              </svg>
              <span>+254 700 000 000</span>
            </div>
            <div className="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>admissions@brightfutureacademy.ac.ke</span>
            </div>
            <div className="footer__contact-item">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>123 Academy Road, Karen, Nairobi</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">© 2026 Bright Future Academy. All rights reserved.</div>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}