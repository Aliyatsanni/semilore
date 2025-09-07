'use client'


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Aliyat<span className="logo-accent">.</span></h3>
              <p>Creating beautiful digital experiences</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Web Design</li>
              <li>Frontend Development</li>
              <li>Responsive Design</li>
              <li>Website Maintenance</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://wa.me/2348160189247" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.tiktok.com/@itz.wunmi8" target="_blank" rel="noopener noreferrer" title="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Sanni Aliyat Semilore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
