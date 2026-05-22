export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="section-container">
          <div className="footer-container">
            {/* Company Info */}
            <div className="footer-section">
              <img
                src="/manus-storage/QRALogo_24986d40.jpeg"
                alt="QRA Strategies LLC"
              />
              <p>
                Fractional Quality and Regulatory Affairs Execution for MedTech Startups
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4>Contact</h4>
              <p>
                <a href="mailto:genevieve@qrastrategies.com">
                  genevieve@qrastrategies.com
                </a>
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {currentYear} QRA Strategies LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
