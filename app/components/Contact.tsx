'use client';

import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    
    if (btn) {
      btn.textContent = 'Sending…';
      btn.disabled = true;
    }

    setTimeout(() => {
      setSubmitted(true);
      form.reset();
    }, 1200);
  };

  return (
    <section className="section section--alt" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section__header animate-on-scroll">
          <span className="section__eyebrow">Get in Touch</span>
          <h2 className="section__heading" id="contact-heading">We&apos;d Love to Hear From You</h2>
          <p className="section__sub">Have a question or ready to apply? Reach out — our team responds within one business day.</p>
        </div>

        <div className="contact__grid">
          {/* Contact Info */}
          <div className="animate-on-scroll">
            <h3 className="contact__info-title">Contact Information</h3>
            <p className="contact__info-sub">Visit us, call, or send a message using the form.</p>

            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 4.18 2 2 0 015.07 2h3a2 2 0 012 1.72c.12.96.36 1.9.72 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006.99 7l1.27-1.27a2 2 0 012.11-.45c.91.36 1.85.6 2.81.72A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__detail-label">Phone</div>
                  <a className="contact__detail-value" href="tel:+254700000000">+254 700 000 000</a>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__detail-label">Email</div>
                  <a className="contact__detail-value" href="mailto:admissions@brightfutureacademy.ac.ke">admissions@brightfutureacademy.ac.ke</a>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__detail-label">Location</div>
                  <div className="contact__detail-value">123 Academy Road, Karen<br/>Nairobi, Kenya</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact__form animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            <h3 className="contact__form-title">Send an Enquiry</h3>

            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="first-name">First Name *</label>
                    <input type="text" id="first-name" required placeholder="Jane" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name">Last Name *</label>
                    <input type="text" id="last-name" required placeholder="Wanjiru" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" required placeholder="jane@example.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+254 7XX XXX XXX" />
                </div>

                <div className="form-group">
                  <label htmlFor="program">Program of Interest</label>
                  <select id="program">
                    <option value="">Select a program…</option>
                    <option>Pre-Primary (Ages 3–5)</option>
                    <option>Lower Primary (Grade 1–3)</option>
                    <option>Upper Primary (Grade 4–6)</option>
                    <option>Junior School (Grade 7–9)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" placeholder="Tell us about your child or ask any questions…"></textarea>
                </div>

                <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Enquiry
                </button>
              </form>
            ) : (
              <div id="form-success" style={{
                background: '#EAF3FB',
                borderRadius: '8px',
                padding: '14px 16px',
                color: '#163A6A',
                fontSize: '14px',
                fontWeight: 500
              }}>
                ✅ Thank you! We&apos;ll be in touch within one business day.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}