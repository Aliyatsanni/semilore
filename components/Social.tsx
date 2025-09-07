'use client'

export default function Social() {
  return (
    <section className="social-media" aria-labelledby="connect-title">
      <div className="container">
        <div className="section-header">
          <h2 id="connect-title" className="section-title">Connect with Me</h2>
          <p className="section-subtitle">Follow for updates, design tips, and project highlights</p>
        </div>
        <div className="social-grid">
          <a className="social-card" href="https://wa.me/2348160189247" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <div className="social-icon whatsapp"><i className="fab fa-whatsapp"></i></div>
            <div className="social-content">
              <h3>WhatsApp</h3>
              <p>Chat with me directly</p>
            </div>
          </a>
          <a className="social-card" href="https://www.tiktok.com/@itz.wunmi8" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <div className="social-icon tiktok"><i className="fab fa-tiktok"></i></div>
            <div className="social-content">
              <h3>TikTok</h3>
              <p>Shorts on design & dev</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
