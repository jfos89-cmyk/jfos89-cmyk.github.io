import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <div className="nav-container">
        {/* Logo */}
        <a href="/" className="logo">
          <img
            src="/manus-storage/QRALogo_24986d40.jpeg"
            alt="QRA Strategies LLC"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/contact">Get in Touch</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-menu open">
          <div className="mobile-menu-content">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
            <a href="/contact" onClick={closeMenu}>
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
