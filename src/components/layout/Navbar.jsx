import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { scrollToSection } from "../../utils/scrollUtils";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const scrollPosition = useScrollPosition();
  const showGetStarted = scrollPosition > window.innerHeight * 0.7;

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => scrollToSection(sectionId), 100);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-primary">
            Praxis
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-neutral-content hover:text-primary transition-colors font-medium">Home</Link>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-neutral-content hover:text-primary transition-colors font-medium">About</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-neutral-content hover:text-primary transition-colors font-medium">Services</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-neutral-content hover:text-primary transition-colors font-medium">Contact</a>
          </div>

          <div className={`hidden md:block transition-opacity duration-300 ${showGetStarted ? 'opacity-100' : 'opacity-0'}`}>
            <button className="btn btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl text-neutral-content"
          >
            {mobileMenuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-black/80 backdrop-blur-sm shadow-lg transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          <Link to="/" className="block text-neutral-content hover:text-primary transition-colors font-medium">Home</Link>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block text-neutral-content hover:text-primary transition-colors font-medium">About</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="block text-neutral-content hover:text-primary transition-colors font-medium">Services</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block text-neutral-content hover:text-primary transition-colors font-medium">Contact</a>
          <button className={`btn btn-primary w-full transition-opacity duration-300 ${showGetStarted ? 'opacity-100' : 'opacity-0'}`}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;