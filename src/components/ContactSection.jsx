import React, { useRef, useState } from 'react';
import { Send, MapPin, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSuccess(true);
          form.current.reset();
          setTimeout(() => setIsSuccess(false), 5000);
        },
        (error) => {
          setIsSubmitting(false);
          setError('Failed to send the message. Please check the EmailJS configuration.');
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <span className="index-number">(04)</span>
        <h2 className="section-title">GET IN TOUCH</h2>
      </div>
      
      <div className="contact-grid">
        <div className="contact-form-wrapper glass-panel">
          <h3>Send a Message</h3>
          <p>Fill out the form below and I'll get back to you within 24 hours.</p>
          
          {isSuccess && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4CAF50', marginBottom: '1rem', padding: '0.75rem', background: 'rgba(76, 175, 80, 0.1)', borderRadius: '4px', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
              <CheckCircle size={18} />
              <span>Message sent! I'll get back to you soon.</span>
            </div>
          )}

          {error && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F44336', marginBottom: '1rem', padding: '0.75rem', background: 'rgba(244, 67, 54, 0.1)', borderRadius: '4px', border: '1px solid rgba(244, 67, 54, 0.3)' }}>
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="name" placeholder="Name" className="glass-input" required disabled={isSubmitting} />
            <input type="email" name="email" placeholder="Email" className="glass-input" required disabled={isSubmitting} />
            <textarea name="message" placeholder="Your Message..." rows={5} className="glass-input" required disabled={isSubmitting}></textarea>
            <button type="submit" className="glass-submit-btn" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
              {isSubmitting ? 'Sending...' : <>Send <Send size={18} /></>}
            </button>
          </form>
        </div>
        
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Open for discussions, architectures, and opportunities to build the future.</p>
          
          <div className="info-block">
            <Mail className="accent-cyan" />
            <div>
              <h4>Primary Email</h4>
              <a href="mailto:chinnam@usc.edu">chinnam@usc.edu</a>
            </div>
          </div>
          
          <div className="info-block">
            <MapPin className="accent-purple" />
            <div>
              <h4>Location</h4>
              <span>Los Angeles, CA</span>
            </div>
          </div>

          <div className="info-block" style={{marginTop: '1rem'}}>
             <div style={{display: 'flex', gap: '1rem'}}>
                <a href="https://github.com/vamsikrishna-66" target="_blank" rel="noreferrer" className="glass-btn inline-btn">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/vamsi-krishna-chinnam/" target="_blank" rel="noreferrer" className="glass-btn inline-btn accent-cyan">
                  LinkedIn
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
